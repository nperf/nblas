(function () {
  'use strict';

  // helper
  function randomArray (N, M) {
    var data = [];
    for (var i = 0; i < N; i++){
      var row = [];
      for (var j = 0; j < M; j++)
        row[j] = Math.random();
      data.push(row.length ? row : Math.random());
    }
    return data;
  }

  var benchmark = require('benchmark'),
      suite = new benchmark.Suite();

  var vectorious = require('vectorious'),
      addon = require('./build/Release/addon');

  var a = new Float64Array(randomArray(1024)),
      b = new Float64Array(randomArray(1024)),
      vecA = new vectorious.Vector(a),
      vecB = new vectorious.Vector(b);

  suite
    .add('Vector::dot', function () {
      vecA.add(vecB);
    })
    .add('blas::ddot', function () {
      addon.ddot(1024, a, b);
    });

    suite
      .on('cycle', function (event) {
        console.log(String(event.target));
      })
      .on('complete', function () {
        console.log('finished');
      })
      .run();
}());
