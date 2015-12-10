(function () {
  'use strict';

  var assert = require('assert'),
      util = require('../util');

  var numeric = require('numeric'),
      vec = require('vectorious'),
      addon = require('../addon');

  const SIZE = 64,
        DIM = 8;
  var f64a = new Float64Array(util.randomArray(SIZE)),
      f64b = new Float64Array(util.randomArray(SIZE)),
      f32a = new Float32Array(util.randomArray(SIZE)),
      f32b = new Float32Array(util.randomArray(SIZE));

  describe('?asum', function () {
    it('should compute the sum of the absolute values of elements in a vector (double-precision)', function () {
      assert.equal(
        addon.asum(f64a),
        numeric.sum(f64a)
      );
    });

    it('should compute the sum of the absolute values of elements in a vector (single-precision)', function () {
      assert.equal(
        addon.asum(f32a),
        numeric.sum(f32a)
      );
    });
  });

  describe('?axpy', function () {
    it('should compute a constant times a vector plus a vector (double precision)', function () {
      var y = f64b.slice(0);
      addon.axpy(f64a, y);
      assert.deepEqual(
        y,
        numeric.add(f64a, f64b)
      );
    });

    it('should compute a constant times a vector plus a vector (single precision)', function () {
      var y = f32b.slice(0);
      addon.axpy(f32a, y);
      assert.deepEqual(
        y,
        numeric.add(f32a, f32b)
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
        numeric.dot(f64a, f64b)
      );
    });

    it('should perform vector dot product (single precision)', function () {
      assert.equal(
        addon.dot(f32a, f32b),
        numeric.dot(f32a, f32b)
      );
    });
  });

  describe('?nrm2', function () {
    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.nrm2(f64a)),
        Math.round(numeric.norm2(f64a))
      );
    });

    it('should compute the L2 norm (euclidean length) of a vector (double-precision)', function () {
      assert.equal(
        Math.round(addon.nrm2(f32a)),
        Math.round(numeric.norm2(f32a))
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
      assert.deepEqual(x, numeric.mul(f64a, 5));

      addon.scal(x, 2);
      assert.deepEqual(x, numeric.mul(f64a, 2 * 5));
    });

    it('should scale all elements in a vector (single precision)', function () {
      var x = f32a.slice(0);

      addon.scal(x, 5);
      assert.deepEqual(x, numeric.mul(f32a, 5));

      addon.scal(x, 2);
      assert.deepEqual(x, numeric.mul(f32a, 2 * 5));
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
        f64a.indexOf(Math.max(...f64a))
      );
    });

    it('should return the index of the element with the largest absolute value in a vector (single-precision)', function () {
      assert.equal(
        addon.iamax(f32a),
        f32a.indexOf(Math.max(...f32a))
      );
    });
  });

  describe('?gbmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.gbmv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.gbmv(A, x, y);
    });
  });

  describe('?gemv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.gemv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.gemv(A, x, y);
    });
  });

  describe('?ger', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.ger(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.ger(A, x, y);
    });
  });

  describe('?sbmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.sbmv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.sbmv(A, x, y);
    });
  });

  describe('?spmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.spmv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.spmv(A, x, y);
    });
  });

  describe('?spr', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.spr(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.spr(A, x);
    });
  });

  describe('?spr2', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.spr2(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.spr2(A, x, y);
    });
  });

  describe('?symv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.symv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.symv(A, x, y);
    });
  });

  describe('?syr', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.syr(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.syr(A, x);
    });
  });

  describe('?syr2', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.syr2(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.syr2(A, x, y);
    });
  });

  describe('?tbmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM),
          y = f64b.slice(0, DIM);
      addon.tbmv(A, x, y);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM),
          y = f32b.slice(0, DIM);
      addon.tbmv(A, x, y);
    });
  });

  describe('?tbsv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.tbsv(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.tbsv(A, x);
    });
  });

  describe('?tpmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.tpmv(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.tpmv(A, x);
    });
  });

  describe('?tpsv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.tpsv(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.tpsv(A, x);
    });
  });

  describe('?trmv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.trmv(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.trmv(A, x);
    });
  });

  describe('?trsv', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          x = f64a.slice(0, DIM);
      addon.trsv(A, x);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          x = f32a.slice(0, DIM);
      addon.trsv(A, x);
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
        new vec.Matrix(x, { shape: [2, 1] })
          .multiply(new vec.Matrix(y, { shape: [1, 2] }))
          .data
      );
    });

    it('should compute the matrix product of two matrices (single-precision)', function () {
      var x = new Float32Array(util.randomArray(2)),
          y = new Float32Array(util.randomArray(2)),
          z = new Float32Array(4);

      addon.gemm(x, y, z, 2, 2, 1);
      assert.deepEqual(
        z,
        new vec.Matrix(x, { shape: [2, 1] })
          .multiply(new vec.Matrix(y, { shape: [1, 2] }))
          .data
      );
    });
  });

  describe('?symm', function () {
    it('should compute the matrix product of two matrices (double-precision)', function () {
      var A = f64a.slice(0),
          B = f64b.slice(0),
          C = f64b.slice(0);

      addon.symm(A, B, C, DIM, DIM);
    });

    it('should compute the matrix product of two matrices (single-precision)', function () {
      var A = f32a.slice(0),
          B = f32b.slice(0),
          C = f32b.slice(0);

      addon.symm(A, B, C, DIM, DIM);
    });
  });

  describe('?syrk', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          C = f64b.slice(0);
      addon.syrk(A, C, DIM, DIM);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          C = f32b.slice(0);
      addon.syrk(A, C, DIM, DIM);
    });
  });

  describe('?syr2k', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          B = f64b.slice(0),
          C = f64b.slice(0);
      addon.syr2k(A, B, C, DIM, DIM);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          B = f32b.slice(0),
          C = f32b.slice(0);
      addon.syr2k(A, B, C, DIM, DIM);
    });
  });

  describe('?trmm', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          B = f64b.slice(0);
      addon.trmm(A, B, DIM, DIM);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          B = f32b.slice(0);
      addon.trmm(A, B, DIM, DIM);
    });
  });

  describe('?trsm', function () {
    it('should not generate runtime errors (double-precision)', function () {
      var A = f64a.slice(0),
          B = f64b.slice(0);
      addon.trsm(A, B, DIM, DIM);
    });

    it('should not generate runtime errors (single-precision)', function () {
      var A = f32a.slice(0),
          B = f32b.slice(0);
      addon.trsm(A, B, DIM, DIM);
    });
  });
}());
