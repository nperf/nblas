(function () {
  'use strict';

  var self = module.exports = {
    randomArray: function (N, M) {
      var data = [];
      for (var i = 0; i < N; i++){
        var row = [];
        for (var j = 0; j < M; j++)
          row[j] = Math.floor(10 * Math.random());
        data.push(row.length ? row : Math.floor(10 * Math.random()));
      }
      return data;
    }
  };
}());
