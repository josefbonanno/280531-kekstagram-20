'use strict';

(function () {

  var shuffle = function (a) {
    var j;
    var x;
    var i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  window.utils = {
    getRandomArrWithoutRepeat: function (min, max) {
      var arr = [];
      for (var j = min; j <= max; j++) {
        arr.push(j);
      }
      shuffle(arr);
      return arr;
    }
  };

})();
