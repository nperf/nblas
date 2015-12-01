(function () {
  'use strict';

  var assert = require('assert'),
      util = require('../util');

  var vectorious = require('vectorious'),
      v = vectorious.Vector,
      m = vectorious.Matrix,
      addon = require('../addon');

  const SIZE = 32;
  var f64a = new Float64Array(util.randomArray(SIZE)),
      f64b = new Float64Array(util.randomArray(SIZE)),
      f32a = new Float32Array(util.randomArray(SIZE)),
      f32b = new Float32Array(util.randomArray(SIZE));

  var vecf64a = new v(f64a),
      vecf64b = new v(f64b),
      vecf32a = new v(Float32Array, f32a),
      vecf32b = new v(Float32Array, f32b);

  describe('?asum', function () {
    it('should compute the sum of the absolute values of elements in a vector (double-precision)', function () {
      assert.equal(
        addon.asum(f64a),
        vecf64a.values.reduce(function (a, b) {
          return Math.abs(a) + Math.abs(b);
        })
      );
    });

    it('should compute the sum of the absolute values of elements in a vector (single-precision)', function () {
      assert.equal(
        addon.asum(f32a),
        vecf32a.values.reduce(function (a, b) {
          return Math.abs(a) + Math.abs(b);
        })
      );
    });
  });

  describe('?axpy', function () {
    it('should compute a constant times a vector plus a vector (double precision)', function () {
      var y = f64b.slice(0);
      addon.axpy(f64a, y);
      assert.deepEqual(
        y,
        vecf64a.add(vecf64b).values
      );
    });

    it('should compute a constant times a vector plus a vector (single precision)', function () {
      var y = f32b.slice(0);
      addon.axpy(f32a, y);
      assert.deepEqual(
        y,
        vecf32a.add(vecf32b).values
      );
    });
  });

  describe('?copy', function () {
    it('should copy a vector to another vector (double precision)', function () {
      var y = f64b.slice(0);

      addon.copy(f64a, y);
      assert.deepEqual(f64a, y);
    });

    it('should copy a vector to another vector (single precision)', function () {
      var y = f32b.slice(0);

      addon.copy(f32a, y);
      assert.deepEqual(f32a, y);
    });
  });

  describe('?dot', function () {
    it('should perform vector dot product (double precision)', function () {
      assert.equal(
        addon.dot(f64a, f64b),
        vecf64a.dot(vecf64b)
      );
    });

    it('should perform vector dot product (single precision)', function () {
      assert.equal(
        addon.dot(f32a, f32b),
        vecf32a.dot(vecf32b)
      );
    });
  });

  describe('?nrm2', function () {
    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.nrm2(f64a)),
        Math.round(vecf64a.magnitude())
      );
    });

    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.nrm2(f32a)),
        Math.round(vecf32a.magnitude())
      );
    });
  });

  describe('?rot', function () {
    it('should perform plane rotation of points (double precision)', function () {
      
    });
  });

  describe('?scal', function () {
    it('should scale all elements in a vector (double precision)', function () {
      var x = f64a.slice(0);
      addon.scal(x, 5);
      assert.deepEqual(
        x,
        vecf64a.scale(5).values
      );

      addon.scal(x, 2);
      assert.deepEqual(
        x,
        vecf64a.scale(5).scale(2).values
      );
    });

    it('should scale all elements in a vector (single precision)', function () {
      var x = f32a.slice(0);

      addon.scal(x, 5);
      assert.deepEqual(x, vecf32a.scale(5).values);

      addon.scal(x, 2);
      assert.deepEqual(x, vecf32a.scale(5).scale(2).values);
    });
  });

  describe('?swap', function () {
    it('should swap the elements of a vector with another vector (double precision)', function () {
      var x = f64a.slice(0),
          y = f64b.slice(0);

      addon.swap(x, y);
      assert.deepEqual(y, f64a);
      assert.deepEqual(x, f64b);
    });
    it('should swap the elements of a vector with another vector (single precision)', function () {
      var x = f32a.slice(0),
          y = f32b.slice(0);

      addon.swap(x, y);
      assert.deepEqual(y, f32a);
      assert.deepEqual(x, f32b);
    });
  });

  describe('i?amax', function () {
    it('should return the index of the element with the largest absolute value in a vector (double-precision)', function () {
      assert.equal(
        addon.iamax(f64a),
        f64a.indexOf(vecf64a.max())
      );
    });

    it('should return the index of the element with the largest absolute value in a vector (single-precision)', function () {
      assert.equal(
        addon.iamax(f32a),
        f32a.indexOf(vecf32a.max())
      );
    });
  });

  describe('?gemm', function () {
    it('should compute the matrix product of two matrices (double-precision)', function () {
      var x = new Float64Array(util.randomArray(2)),
          y = new Float64Array(util.randomArray(2)),
          z = new Float64Array(4);

      addon.gemm(x, y, z, 2, 2, 1);
      assert.deepEqual(
        z,
        new m(x, { shape: [2, 1] }).multiply(new m(y, { shape: [1, 2] })).data
      );
    });

    it('should compute the matrix product of two matrices (double-precision)', function () {
      var x = new Float32Array(util.randomArray(2)),
          y = new Float32Array(util.randomArray(2)),
          z = new Float32Array(4);

      addon.gemm(x, y, z, 2, 2, 1);
      assert.deepEqual(
        z,
        new m(x, { shape: [2, 1] }).multiply(new m(y, { shape: [1, 2] })).data
      );
    });
  });
}());
