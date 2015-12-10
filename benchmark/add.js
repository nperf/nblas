(function () {
  'use strict';

  var bench = require('benchmark'),
      double = new bench.Suite(),
      doublecpy = new bench.Suite(),
      single = new bench.Suite(),
      singlecpy = new bench.Suite(),
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
  console.log('precision vector addition.');
  console.log();
  console.log('Double precision:');

  double
    .add('nBLAS (in-place)', () => {
      nblas.daxpy(SIZE, 1.0, f64b, 1, f64a, 1);
    })
    .add('regular for-loop (in-place)', () => {
      for (var i = 0; i < SIZE; i++)
        f64a[i] += f64b[i];
    })
    .add('numeric.js (in-place)', () => {
      numeric.addeq(f64a, f64b);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log();
    })
    .run();

  doublecpy
    .add('nBLAS (copy)', () => {
      nblas.dcopy(SIZE, f64a, 1, f64c, 1);
      nblas.daxpy(SIZE, 1.0, f64b, 1, f64c, 1);
    })
    .add('regular for-loop (copy)', () => {
      var f64c = new Float64Array(f64a);
      for (var i = 0; i < SIZE; i++)
        f64c[i] += f64b[i];
    })
    .add('numeric.js (copy)', () => {
      numeric.add(f64a, f64b);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log('-----------------');
      console.log();
    })
    .run();

  console.log('Single precision:');

  single
    .add('nBLAS (in-place)', () => {
      nblas.saxpy(SIZE, 1.0, f32b, 1, f32a, 1);
    })
    .add('regular for-loop (in-place)', () => {
      for (var i = 0; i < SIZE; i++)
        f32a[i] += f32b[i];
    })
    .add('numeric.js (in-place)', () => {
      numeric.addeq(f64a, f64b);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log();
    })
    .run();

  singlecpy
    .add('nBLAS (copy)', () => {
      nblas.dcopy(SIZE, f32a, 1, f32c, 1);
      nblas.saxpy(SIZE, 1.0, f32b, 1, f32c, 1);
    })
    .add('regular for-loop (copy)', () => {
      var f32c = new Float32Array(f32a);
      for (var i = 0; i < SIZE; i++)
        f32c[i] += f32b[i];
    })
    .add('numeric.js (copy)', () => {
      numeric.add(f32a, f32b);
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('fastest:', this.filter('fastest').pluck('name'));
      console.log('-----------------');
      console.log();
    })
    .run();
}());
