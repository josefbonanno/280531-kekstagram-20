'use strict';
(function () {

  var form = document.getElementById('upload-select-image');
  var hashTagsInput = document.querySelector('.text__hashtags');
  var textAreaComment = document.querySelector('.text__description');
  var errorColorChange = function () {
    hashTagsInput.style.outlineColor = 'red';
  };

  hashTagsInput.addEventListener('input', function (evt) {
    evt.preventDefault();
    var re = /^#[a-zа-яA-Z-А-Я0-9]*$/;
    var hashTagsText = hashTagsInput.value.toLowerCase();
    var hashtags = hashTagsText.split(' ');
    for (var i = 0; i < hashtags.length; i++) {
      if (hashtags.length > 5) {
        hashTagsInput.setCustomValidity('Можно ввести только 5 хэштегов');
        errorColorChange();
        form.reportValidity();
      } else if (hashtags[i] === '#') {
        hashTagsInput.setCustomValidity('Хэштег не может состоять из одной #');
        errorColorChange();
        form.reportValidity();
      } else if (hashtags[i].length > 20) {
        hashTagsInput.setCustomValidity('Хэштег не должен быть длиннее 20 символов');
        errorColorChange();
        form.reportValidity();
      } else if (hashtags[i] === hashtags[Math.floor(Math.random() * hashtags.length)] && hashtags.length > 1) {
        hashTagsInput.setCustomValidity('Хэштеги не могут повторяться');
        errorColorChange();
        form.reportValidity();
      } else if (!(re.test(hashtags[i]))) {
        hashTagsInput.setCustomValidity('Хэштег начинается с решетки, не включает спецсимволы и разделяются пробелами');
        errorColorChange();
        form.reportValidity();
      } else {
        hashTagsInput.setCustomValidity('');
        hashTagsInput.style.outlineColor = '';
      }
    }
  });

  textAreaComment.addEventListener('input', function (evt) {
    evt.stopPropagation();
    if (textAreaComment.value.length >= 140) {
      textAreaComment.setCustomValidity('Комментарий не должен быть длиннее 140 символов');
      textAreaComment.style.outlineColor = 'red';
      form.reportValidity();
    } else {
      textAreaComment.setCustomValidity('');
      textAreaComment.style.outlineColor = '';
    }
  });

  hashTagsInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

  textAreaComment.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

})();
