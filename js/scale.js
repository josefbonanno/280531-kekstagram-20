'use strict';
(function () {

  var scaleControlValue = document.querySelector('.scale__control--value');
  var scaleControlSmaller = document.querySelector('.scale__control--smaller');
  var scaleControlBigger = document.querySelector('.scale__control--bigger');
  var imagePreview = document.querySelector('.img-upload__preview img');

  scaleControlSmaller.addEventListener('click', function () {
    if (25 < scaleControlValue.value && 100 >= scaleControlValue.value) {
      scaleControlValue.value -= 25;
      imagePreview.style.transform = 'scale(' + scaleControlValue.value / 100 + ')';
    }
  });

  scaleControlBigger.addEventListener('click', function () {
    if (25 <= scaleControlValue.value && scaleControlValue.value < 100) {
      scaleControlValue.value = parseFloat(scaleControlValue.value) + 25;
      imagePreview.style.transform = 'scale(' + scaleControlValue.value / 100 + ')';
    }
  });

})();
