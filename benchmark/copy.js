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
  console.log('precision vector copying.');
  console.log();
  console.log('Double precision:');

  double
    .add('nBLAS', () => {
      nblas.dcopy(SIZE, f64a, 1, f64c, 1);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        f64c[i] = f64a[i];
    })
    .add('util.memcpy', () => {
      util.memcpy(f64c.buffer, f64a.buffer);
    })
    .add('slice', () => {
      f64c = f64a.slice(0);
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
      nblas.scopy(SIZE, f32a, 1, f32c, 1);
    })
    .add('regular for-loop', () => {
      var sum = 0;
      for (var i = 0; i < SIZE; i++)
        f64c[i] = f32a[i];
    })
    .add('util.memcpy', () => {
      util.memcpy(f32c.buffer, f32a.buffer);
    })
    .add('slice', () => {
      f32c = f32a.slice(0);
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
