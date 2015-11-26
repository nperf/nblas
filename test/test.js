(function () {
  'use strict';

  var assert = require('assert'),
      util = require('../util');

  var vectorious = require('vectorious'),
      v = vectorious.Vector,
      m = vectorious.Matrix,
      addon = require('../build/Release/addon');

  const SIZE = 32;
  var f64a = new Float64Array(util.randomArray(SIZE)),
      f64b = new Float64Array(util.randomArray(SIZE)),
      f32a = new Float32Array(util.randomArray(SIZE)),
      f32b = new Float32Array(util.randomArray(SIZE));

  var vecf64a = new v(f64a),
      vecf64b = new v(f64b),
      vecf32a = new v(Float32Array, f32a),
      vecf32b = new v(Float32Array, f32b);

  describe('ddot, sdot', function () {
    it('should perform vector dot product (double precision)', function () {
      assert.equal(
        addon.ddot(SIZE, f64a, 1, f64b, 1),
        vecf64a.dot(vecf64b)
      );
    });

    it('should perform vector dot product (single precision)', function () {
      assert.equal(
        addon.sdot(SIZE, f32a, 1, f32b, 1),
        vecf32a.dot(vecf32b)
      );
    });
  });

  describe('daxpy, saxpy', function () {
    it('should compute a constant times a vector plus a vector (double precision)', function () {
      var y = f64b.slice(0);
      addon.daxpy(SIZE, 1, f64a, 1, y, 1);
      assert.deepEqual(
        y,
        vecf64a.add(vecf64b).values
      );
    });

    it('should compute a constant times a vector plus a vector (single precision)', function () {
      var y = f32b.slice(0);
      addon.saxpy(SIZE, 1, f32a, 1, y, 1);
      assert.deepEqual(
        y,
        vecf32a.add(vecf32b).values
      );
    });
  });


  describe('dscal, sscal', function () {
    it('should scale all elements in a vector (double precision)', function () {
      var x = f64a.slice(0);

      addon.dscal(SIZE, 5, x, 1);
      assert.deepEqual(
        x,
        vecf64a.scale(5).values
      );

      addon.dscal(SIZE, 2, x, 1);
      assert.deepEqual(
        x,
        vecf64a.scale(5).scale(2).values
      );
    });

    it('should scale all elements in a vector (single precision)', function () {
      var x = f32a.slice(0);

      addon.sscal(SIZE, 5, x, 1);
      assert.deepEqual(x, vecf32a.scale(5).values);

      addon.sscal(SIZE, 2, x, 1);
      assert.deepEqual(x, vecf32a.scale(5).scale(2).values);
    });
  });

  describe('dcopy, scopy', function () {
    it('should copy a vector to another vector (double precision)', function () {
      var y = f64b.slice(0);

      addon.dcopy(SIZE, f64a, 1, y, 1);
      assert.deepEqual(f64a, y);
    });

    it('should copy a vector to another vector (single precision)', function () {
      var y = f32b.slice(0);

      addon.scopy(SIZE, f32a, 1, y, 1);
      assert.deepEqual(f32a, y);
    });
  });

  describe('dswap, sswap', function () {
    it('should swap the elements of a vector with another vector (double precision)', function () {
      var x = f64a.slice(0),
          y = f64b.slice(0);

      addon.dswap(SIZE, x, 1, y, 1);
      assert.deepEqual(y, f64a);
      assert.deepEqual(x, f64b);
    });
    it('should swap the elements of a vector with another vector (single precision)', function () {
      var x = f32a.slice(0),
          y = f32b.slice(0);

      addon.sswap(SIZE, x, 1, y, 1);
      assert.deepEqual(y, f32a);
      assert.deepEqual(x, f32b);
    });
  });

  describe('idamax, isamax', function () {
    it('should return the index of the element with the largest absolute value in a vector (double-precision)', function () {
      assert.equal(
        addon.idamax(SIZE, f64a, 1),
        f64a.indexOf(vecf64a.max())
      );
    });

    it('should return the index of the element with the largest absolute value in a vector (single-precision)', function () {
      assert.equal(
        addon.isamax(SIZE, f32a, 1),
        f32a.indexOf(vecf32a.max())
      );
    });
  });

  describe('dasum, sasum', function () {
    it('should compute the sum of the absolute values of elements in a vector (double-precision)', function () {
      assert.equal(
        addon.dasum(SIZE, f64a, 1),
        vecf64a.values.reduce(function (a, b) {
          return Math.abs(a) + Math.abs(b);
        })
      );
    });

    it('should compute the sum of the absolute values of elements in a vector (single-precision)', function () {
      assert.equal(
        addon.sasum(SIZE, f32a, 1),
        vecf32a.values.reduce(function (a, b) {
          return Math.abs(a) + Math.abs(b);
        })
      );
    });
  });

  describe('dnrm2, snrm2', function () {
    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.dnrm2(SIZE, f64a, 1)),
        Math.round(vecf64a.magnitude())
      );
    });

    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.snrm2(SIZE, f32a, 1)),
        Math.round(vecf32a.magnitude())
      );
    });
  });

  describe('dgemm, sgemm', function () {
    it('should compute the matrix product of two matrices (double-precision)', function () {
      var x = new Float64Array(util.randomArray(2)),
          y = new Float64Array(util.randomArray(2)),
          z = new Float64Array(4);

      addon.dgemm(
        101, // row-major
        111, // no transpose for x
        112, // transpose y
        2, // rows in x and z
        2, // cols in y and z
        1, // cols in x, rows in y
        1, // product scaling factor
        x,
        1, // ldx
        y,
        1, // ldy
        1, // scaling factor for z
        z,
        2 // ldz
      );

      assert.deepEqual(
        z,
        new m(x, { shape: [2, 1] }).multiply(new m(y, { shape: [1, 2] })).data
      );
    });

    it('should compute the matrix product of two matrices (double-precision)', function () {
      var x = new Float32Array(util.randomArray(2)),
          y = new Float32Array(util.randomArray(2)),
          z = new Float32Array(4);

      addon.sgemm(
        101, // row-major
        111, // no transpose for x
        112, // transpose y
        2, // rows in x and z
        2, // cols in y and z
        1, // cols in x, rows in y
        1, // product scaling factor
        x,
        1, // ldx
        y,
        1, // ldy
        1, // scaling factor for z
        z,
        2 // ldz
      );

      assert.deepEqual(
        z,
        new m(x, { shape: [2, 1] }).multiply(new m(y, { shape: [1, 2] })).data
      );
    });
  });
}());
