'use strict';
(function () {

  var bigPicture = document.querySelector('.big-picture');
  var picturesContainer = document.querySelector('.pictures');
  var commentsLoader = document.querySelector('.comments-loader');
  var socialCommentCount = document.querySelectorAll('.social__comment');
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

      var socialCommentCount = document.querySelector('.picture__comments').textContent;
      socialCommentCount = picture.comments.length;

      document.querySelector('.social__comments').textContent = '';

      for (var n = 0; n < socialCommentCount; n++) {
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
    }

    document.querySelector('.big-picture').classList.remove('hidden');

    if (picture.comments.length <= 4) {
      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');
    } else {
      document.querySelector('.comments-count').textContent = picture.comments.length;
    }

    commentsLoader.addEventListener('click', function () {
      for (var m = 0; m < picture.comments.length; m++) {
        document.querySelectorAll('.social__comment')[m].classList.remove('hidden');
      }
      document.querySelector('.comments-loader').classList.add('hidden');
      document.querySelector('.social__comment-count').classList.add('hidden');
    });

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
