'use strict';
(function () {

  var bigPicture = document.querySelector('.big-picture');
  var picturesContainer = document.querySelector('.pictures');
  var commentsLoader = document.querySelector('.comments-loader');

  var bigPictureClose = function () {
    bigPicture.classList.add('hidden');
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
  }

  var openPictures = function (pictureElement, picture) {

    pictureElement.addEventListener('click', function () {
      document.querySelector('.big-picture__img img').src = picture.url;
      document.querySelector('.likes-count').textContent = picture.likes;
      document.querySelector('.social__caption').textContent = picture.description;
      document.querySelector('.picture__comments').textContent = picture.comments.length;

      document.querySelector('.social__comments').textContent = '';

      for (var n = 0; n < picture.comments.length; n++) {
        var socialComment = document.createElement('li');
        socialComment.className = 'social__comment';
        var socialCommentImg = document.createElement('img');
        var socialCommentText = document.createElement('p');
        socialCommentImg.className = 'social__picture';
        socialCommentText.className = 'social__text';
        socialComment.append(socialCommentImg);
        socialComment.append(socialCommentText);
        socialCommentImg.setAttribute('src', picture.comments[n].avatar);
        socialCommentImg.setAttribute('alt', picture.comments[n].name);
        socialCommentText.innerHTML = picture.comments[n].message;

        if (n >= 5) {
          socialComment.classList.add('hidden');
        }

      document.querySelector('.social__comments').appendChild(socialComment);

      if (picture.comments.length <= 4) {
        document.querySelector('.social__comment-count').classList.add('hidden');
        document.querySelector('.comments-loader').classList.add('hidden');
      } else {
        document.querySelector('.comments-count').textContent = picture.comments.length;
      }

      commentsLoader.addEventListener('click', function () {
        for (var m = 0; m < document.querySelector('.picture__comments').textContent; m++) {
          document.querySelectorAll('.social__comment')[m].classList.remove('hidden');
        }
        document.querySelector('.comments-loader').classList.add('hidden');
        document.querySelector('.social__comment-count').classList.add('hidden');
      });
    }

    document.querySelector('.big-picture').classList.remove('hidden');

    var closePictures = bigPicture.querySelector('.big-picture__cancel');
    closePictures.addEventListener('click', function (evt) {
      evt.preventDefault();
      bigPictureClose();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        bigPictureClose();
      }
    });
    bigPicture.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        evt.preventDefault();
        bigPictureClose();
      }
    });

  });
};


  window.load(function (pictures) {
    var pictureElements = document.querySelectorAll('.picture');
    for (var i = 0; i < pictureElements.length; i++) {
      openPictures(pictureElements[i], pictures[i]);
    }
  });

})();
