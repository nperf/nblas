(function () {
  'use strict';

  // helper
  var util = require('./util');

  var benchmark = require('benchmark'),
      suite = new benchmark.Suite();

  var vectorious = require('vectorious'),
      v = vectorious.Vector,
      m = vectorious.Matrix,
      addon = require('./build/Release/addon');

  const SIZE = 1024,
        DIM = Math.floor(Math.sqrt(SIZE));
  var f64a = new Float64Array(util.randomArray(SIZE)),
      f64b = new Float64Array(util.randomArray(SIZE)),
      f32a = new Float32Array(util.randomArray(SIZE)),
      f32b = new Float32Array(util.randomArray(SIZE));

  var vecf64a = new v(f64a),
      vecf64b = new v(f64b),
      vecf32a = new v(Float32Array, f32a),
      vecf32b = new v(Float32Array, f32b);

  var mat64a = new m(f64a, { shape: [DIM, DIM] }),
      mat64b = new m(f64b, { shape: [DIM, DIM] }),
      mat32a = new m(f32a, { shape: [DIM, DIM] }),
      mat32b = new m(f32b, { shape: [DIM, DIM] });

  suite
    .add('V::double::dot', function () {
      vecf64a.add(vecf64b);
    })
    .add('V::float::dot', function () {
      vecf32a.add(vecf32b);
    })
    .add('V::double::add', function () {
      vecf64a.add(vecf64b);
    })
    .add('V::float::add', function () {
      vecf32a.add(vecf32b);
    })
    .add('V::double::scale', function () {
      vecf64a.scale(Math.random());
    })
    .add('V::float::scale', function () {
      vecf32a.scale(Math.random());
    })
    .add('V::double::indexOf::max', function () {
      f64a.indexOf(vecf64a.max());
    })
    .add('V::float::indexOf::max', function () {
      f32a.indexOf(vecf32a.max());
    })
    .add('V::double::magnitude', function () {
      f32a.indexOf(vecf64a.magnitude());
    })
    .add('V::float::magnitude', function () {
      f32a.indexOf(vecf32a.magnitude());
    })
    .add('M::double::multiply', function () {
      mat64a.multiply(mat64b);
    })
    .add('M::float::multiply', function () {
      mat32a.multiply(mat32b);
    });

  suite
    .add('BLAS::double::ddot', function () {
      addon.ddot(SIZE, f64a, 1, f64b, 1);
    })
    .add('BLAS::float::sdot', function () {
      addon.sdot(SIZE, f32a, 1, f32b, 1);
    })
    .add('BLAS::double::daxpy', function() {
      addon.daxpy(SIZE, 1, f64a, 1, f64b.slice(0), 1);
    })
    .add('BLAS::float::saxpy', function() {
      addon.saxpy(SIZE, 1, f32a, 1, f32b.slice(0), 1);
    })
    .add('BLAS::double::dscal', function() {
      addon.dscal(SIZE, Math.random(), f64a.slice(0), 1);
    })
    .add('BLAS::float::sscal', function() {
      addon.sscal(SIZE, Math.random(), f32a.slice(0), 1);
    })
    .add('BLAS::double::idamax', function () {
      addon.idamax(SIZE, f64a, 1);
    })
    .add('BLAS::float::isamax', function () {
      addon.isamax(SIZE, f32a, 1);
    })
    .add('BLAS::double::dasum', function () {
      addon.dasum(SIZE, f64a, 1);
    })
    .add('BLAS::float::sasum', function () {
      addon.sasum(SIZE, f32a, 1);
    })
    .add('BLAS::double::dnrm2', function () {
      addon.dnrm2(SIZE, f64a, 1);
    })
    .add('BLAS::float::snrm2', function () {
      addon.snrm2(SIZE, f32a, 1);
    })
    .add('BLAS::double::dgemm', function () {
      var z = new Float64Array(SIZE);
      addon.dgemm(
        101,
        111,
        111,
        DIM,
        DIM,
        DIM,
        1,
        f64a,
        DIM,
        f64b,
        DIM,
        1,
        z,
        DIM
      );
    })
    .add('BLAS::float::sgemm', function () {
      var z = new Float64Array(SIZE);
      addon.dgemm(
        101,
        111,
        111,
        DIM,
        DIM,
        DIM,
        1,
        f64a,
        DIM,
        f64b,
        DIM,
        1,
        z,
        DIM
      );
    });

    suite
      .on('cycle', function (event) {
        console.log(String(event.target));

        f64a = new Float64Array(util.randomArray(SIZE));
        f64b = new Float64Array(util.randomArray(SIZE));
        f32a = new Float32Array(util.randomArray(SIZE));
        f32b = new Float32Array(util.randomArray(SIZE));

        vecf64a = new v(f64a);
        vecf64b = new v(f64b);
        vecf32a = new v(Float32Array, f32a);
        vecf32b = new v(Float32Array, f32b);

        mat64a = new m(f64a, { shape: [DIM, DIM] });
        mat64b = new m(f64b, { shape: [DIM, DIM] });
        mat32a = new m(f32a, { shape: [DIM, DIM] });
        mat32b = new m(f32b, { shape: [DIM, DIM] });
      })
      .on('complete', function () {
        console.log('finished');
      })
      .run();
}());
