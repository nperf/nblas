(function () {
  'use strict';

  var bench = require('benchmark'),
      double = new bench.Suite(),
      single = new bench.Suite(),
      util = require('../util');

  // libraries
  var nblas = require('../'),
      numeric = require('numeric');

  const SIZE = 1024;

  var a = util.randomArray(SIZE),
      b = util.randomArray(SIZE);

  // typed array
  var f64a = new Float64Array(a),
      f64b = new Float64Array(b),
      f64c = new Float64Array(SIZE),
      f32a = new Float32Array(a),
      f32b = new Float32Array(b),
      f32c = new Float32Array(SIZE);

  console.log('Benchmarking single (Float32Array) and double (Float64Array)');
  console.log('precision vector sum.');
  console.log();
  console.log('Double precision:');

  double
    .add('nBLAS', () => {
      nblas.dasum(SIZE, f64a);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        sum += f64a[i];
    })
    .add('numeric.js', () => {
      numeric.sum(f64a);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log();
    })
    .run();

  console.log('Single precision:');

  single
    .add('nBLAS', () => {
      nblas.sasum(SIZE, f32a, 1);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        sum += f32a[i];
    })
    .add('numeric.js', () => {
      numeric.sum(f32a);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log();
    })
    .run();
}());
