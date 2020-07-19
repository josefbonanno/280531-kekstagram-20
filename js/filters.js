'use strict';

(function () {
  var scaleLine = document.querySelector('.effect-level__line');
  var scaleHandle = document.querySelector('.effect-level__pin');
  var scaleLevel = document.querySelector('.effect-level__depth');
  var effectLevel = document.querySelector('.effect-level');

  effectLevel.classList.add('hidden');

  scaleHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var lineWidth = scaleLine.offsetWidth;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if (scaleHandle.offsetLeft < 0) {
        scaleHandle.style.left = 0 + 'px';
        scaleLevel.style.width = 0 + 'px';
      } else if (scaleHandle.offsetLeft > lineWidth) {
        scaleHandle.style.left = lineWidth + 'px';
        scaleLevel.style.width = lineWidth + 'px';
      } else {
        scaleHandle.style.left = (scaleHandle.offsetLeft - shift.x) + 'px';
        scaleLevel.style.width = (scaleHandle.offsetLeft - shift.x) + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })

  var imageFilter = function () {

    var percentCount = function () {
      var percent = scaleHandle.offsetLeft;
        if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.1) {
           percent = 0.1;
         } else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.2) {
           percent = 0.2;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.3) {
           percent = 0.3;
         } else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.4) {
           percent = 0.4;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.5) {
           percent = 0.5;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.6) {
           percent = 0.6;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.7) {
           percent = 0.7;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.8) {
           percent = 0.8;
         }
           else if (scaleHandle.offsetLeft < scaleLine.offsetWidth * 0.9) {
           percent = 0.9;
         }
           else {
           percent = 1;
         }
         return percent;
     }

    if (imagePreview.className === 'effects__preview--chrome') {
      imagePreview.style.filter = 'grayscale(' + 1 * percentCount() + ')';
    } else if (imagePreview.className === 'effects__preview--sepia') {
      imagePreview.style.filter = 'sepia(' + 1 * percentCount() + ')';
    } else if (imagePreview.className === 'effects__preview--marvin') {
      imagePreview.style.filter = 'invert(' + 100 * percentCount() + '%' + ')';
    } else if (imagePreview.className === 'effects__preview--phobos') {
      imagePreview.style.filter = 'blur(' + 3 * percentCount() + 'px' + ')';
    } else if (imagePreview.className === 'effects__preview--heat') {
      imagePreview.style.filter = 'brightness(' + 3 * percentCount() + ')';
    } else {
      imagePreview.style.filter = 'none';
    }

  }

  scaleHandle.addEventListener('mousemove', imageFilter);

  var imagePreview = document.querySelector('.img-upload__preview img');

  document.querySelector('.img-upload__effects').addEventListener('change', function(evt) {
    imagePreview.className = '';
    imagePreview.style.filter = '';
    var input = evt.target;
    if (input.name !== 'effect') {
      return;
    }
    if (input.value !== 'none') {
      effectLevel.classList.remove('hidden');
    } else {
      effectLevel.classList.add('hidden');
    }
    var className = 'effects__preview--';
    className += input.value;
    imagePreview.className = className;
    scaleHandle.style.left = '100%';
    scaleLevel.style.width = '100%';
  });

})();
