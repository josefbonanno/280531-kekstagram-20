'use strict';
(function () {

  window.form = document.getElementById('upload-select-image');
  var openFilter = document.querySelector('.img-upload__overlay');
  var closeFilter = document.querySelector('.img-upload__cancel');
  window.imagePreview = document.querySelector('.img-upload__preview img');
  var successTemplate = document.getElementById('success').content;
  var successMessage = successTemplate.cloneNode(true);
  var errorTemplate = document.getElementById('error').content;
  var errorMessage = errorTemplate.cloneNode(true);

  var onFilterEscPress = function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeFilterForm();
    }
  };

  var uploadSuccess = function () {
    document.querySelector('main').appendChild(successMessage);
    var closeSuccessMessage = document.querySelector('.success__button');
    closeSuccessMessage.addEventListener('click', function () {
      document.querySelector('.success').classList.add('hidden');
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.success').classList.add('hidden');
      }
    });
  };
  var uploadUnSuccess = function () {
    document.querySelector('main').appendChild(errorMessage);
    var closeErrorMessage = document.querySelector('.error__button');
    closeErrorMessage.addEventListener('click', function () {
      document.querySelector('.error').classList.add('hidden');
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.error').classList.add('hidden');
      }
    });
  };

  var openFilterForm = function () {
    openFilter.classList.remove('hidden');
    document.addEventListener('keydown', onFilterEscPress);
    document.querySelector('body').classList.add('.modal-open');
  };

  var closeFilterForm = function () {
    window.imagePreview.className = '';
    window.imagePreview.style.filter = '';
    window.imagePreview.style.transform = '';
    document.querySelector('.scale__control--value').value = 100;
    document.querySelector('.effect-level').classList.add('hidden');
    document.querySelector('.text__hashtags').value = '';
    document.querySelector('.text__description').value = '';
    openFilter.classList.add('hidden');
    document.removeEventListener('keydown', onFilterEscPress);
    document.querySelector('body').classList.remove('.modal-open');
  };

  window.form.addEventListener('change', function () {
    openFilterForm();
  });

  window.form.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openFilterForm();
    }
  });

  closeFilter.addEventListener('click', function () {
    closeFilterForm();
  });

  closeFilter.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closeFilterForm();
    }
  });

  window.form.addEventListener('submit', function (evt) {
    window.upload(new FormData(window.form), function () {
      closeFilterForm();
      uploadSuccess();
    }, function () {
      closeFilterForm();
      uploadUnSuccess();
    });
    evt.preventDefault();
  });

})();
