'use strict';
(function () {

  var form = document.getElementById('upload-select-image');
  var openFilter = document.querySelector('.img-upload__overlay');
  var closeFilter = document.querySelector('.img-upload__cancel');

  var onFilterEscPress = function (evt) {
    if (evt.key === 27) {
      evt.preventDefault();
      closeFilterForm();
    }
  };

  var openFilterForm = function () {
    openFilter.classList.remove('hidden');
    document.addEventListener('keydown', onFilterEscPress);
  };

  var closeFilterForm = function () {
    openFilter.classList.add('hidden');
    document.removeEventListener('keydown', onFilterEscPress);
  };

  form.addEventListener('change', function() {
    openFilterForm();
  });

  form.addEventListener('keydown', function(evt) {
    if (evt.key === 13) {
      openFilterForm();
    }
  });

  closeFilter.addEventListener('click', function() {
    closeFilterForm();
  });

  closeFilter.addEventListener('keydown', function(evt) {
    if (evt.key === 13) {
    closeFilterForm();
    }
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 27) {
    closeFilterForm();
    }
  });

  form.addEventListener('submit', function(evt) {
    window.upload(new FormData(form), function(response) {
    closeFilterForm();
  });
    evt.preventDefault();
    imagePreview.className = '';
    imagePreview.style.filter = '';
    imagePreview.style.transform = '';
    document.querySelector('.scale__control--value').value = 100;
    document.querySelector('.effect-level').classList.add('hidden');
    document.querySelector('.text__hashtags').value = '';
    document.querySelector('.text__description').value = '';
  });

})();
