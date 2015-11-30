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
}());
