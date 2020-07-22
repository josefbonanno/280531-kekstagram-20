'use strict';
(function () {

  var scaleControlValue = document.querySelector('.scale__control--value');
  var scaleControlSmaller = document.querySelector('.scale__control--smaller');
  var scaleControlBigger = document.querySelector('.scale__control--bigger');

  scaleControlSmaller.addEventListener('click', function () {
    if (scaleControlValue.value <= 100 && scaleControlValue.value > 25) {
      scaleControlValue.value -= 25;
      window.imagePreview.style.transform = 'scale(' + scaleControlValue.value / 100 + ')';
    }
  });

  scaleControlBigger.addEventListener('click', function () {
    if (scaleControlValue.value >= 25 && scaleControlValue.value < 100) {
      scaleControlValue.value = parseFloat(scaleControlValue.value) + 25;
      window.imagePreview.style.transform = 'scale(' + scaleControlValue.value / 100 + ')';
    }
  });

})();
