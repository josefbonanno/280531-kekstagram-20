'use strict';

(function () {
  var pictureTemplate = document.getElementById('picture').content;
  var fragment = document.createDocumentFragment();
  var pictures = [];
  var amount = 25;

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

  var picturesWrapper = document.querySelector('.pictures');

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

  var renderPicture = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureElement;
  }

  window.renderGallery = function (response) {
    var previousPictures = document.querySelectorAll('a.picture');
    for (var j = 0; j < previousPictures.length; j++) {
      picturesWrapper.removeChild(previousPictures[j]);
    }
    for (var i = 0; i < amount; i++) {
      fragment.appendChild(renderPicture(response[i]));
    }
    document.querySelector('.pictures').appendChild(fragment);
  };

  window.load(function (response) {
    pictures = response;
    window.renderGallery(pictures);

    window.filteredGallery = {
      onDefault: function () {
        pictures = [];
        amount = 25;
        pictures = response;
        window.renderGallery(pictures);
      },
      onRandom: function () {
        pictures = [];
        amount = 10;
        var numbers = window.utils.getRandomArrWithoutRepeat(0, response.length - 1);
        for (var n = 0; n < numbers.length; n++) {
          pictures.push(response[numbers[n]]);
        }
        window.renderGallery(pictures);
      },
      onDiscussed: function () {
        pictures = [];
        amount = 25;
        pictures = response.slice();
        pictures = window.getDiscussed(pictures).reverse();
        window.renderGallery(pictures);
      }
    }
   });

})();
