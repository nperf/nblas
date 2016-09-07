(function () {
  'use strict';

  var nblas = require('./build/Release/addon');

  var x = new Float64Array([1, 2, 3, 4]),
      a = x.subarray(0, 2),
      b = x.subarray(2, 4);

  console.log(x);
  console.log(a, b);
  nblas.daxpy(2, 1, a, 1, b, 1);
  console.log();
  console.log(x);
  console.log(a, b);
}());