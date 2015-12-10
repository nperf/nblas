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
  console.log('precision vector dot product.');
  console.log();
  console.log('Double precision:');

  double
    .add('nBLAS', () => {
      nblas.ddot(SIZE, f64b, 1, f64a, 1);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        sum += f64a[i] * f64b[i];
    })
    .add('numeric.js', () => {
      numeric.dot(f64a, f64b);
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
      nblas.sdot(SIZE, f32b, 1, f32a, 1);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        sum += f32a[i] * f32b[i];
    })
    .add('numeric.js', () => {
      numeric.dot(f64a, f64b);
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
