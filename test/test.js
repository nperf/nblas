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

  describe('addon.sdot', function () {
    it('should perform single precision vector dot product', function () {
      assert.equal(
        addon.sdot(SIZE, f32a, 1, f32b, 1),
        vecf32a.dot(vecf32b)
      );
    });
  });

  describe('addon.ddot', function () {
    it('should perform double precision vector dot product', function () {
      assert.equal(
        addon.ddot(SIZE, f64a, 1, f64b, 1),
        vecf64a.dot(vecf64b)
      );
    });
  });

  describe('addon.daxpy', function () {
    it('should compute a constant times a vector plus a vector (double precision)', function () {
      var y = f64b.slice(0);
      addon.daxpy(SIZE, 1, f64a, 1, y, 1);
      assert.deepEqual(
        y,
        vecf64a.add(vecf64b).values
      );
    });
  });

  describe('addon.saxpy', function () {
    it('should compute a constant times a vector plus a vector (single precision)', function () {
      var y = f32b.slice(0);
      addon.saxpy(SIZE, 1, f32a, 1, y, 1);
      assert.deepEqual(
        y,
        vecf32a.add(vecf32b).values
      );
    });
  });


  describe('addon.dscal', function () {
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
  });

  describe('addon.sscal', function () {
    it('should scale all elements in a vector (single precision)', function () {
      var x = f32a.slice(0);

      addon.sscal(SIZE, 5, x, 1);
      assert.deepEqual(
        x,
        vecf32a.scale(5).values
      );

      addon.sscal(SIZE, 2, x, 1);
      assert.deepEqual(
        x,
        vecf32a.scale(5).scale(2).values
      );
    });
  });
}());
