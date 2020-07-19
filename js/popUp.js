'use strict';
(function () {

  var bigPicture = document.querySelector('.big-picture');

  var bigPictureClose = function () {
    bigPicture.classList.add('hidden');
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
    document.querySelector('.comments-visual').textContent = 5;
  };

    window.openPictures = function (pictureElement, picture) {

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
     }

     if (picture.comments.length <= 4) {
       document.querySelector('.social__comment-count').classList.add('hidden');
       document.querySelector('.comments-loader').classList.add('hidden');
     } else {
       document.querySelector('.comments-count').textContent = picture.comments.length;
     }

     var commentsLoader = document.querySelector('.comments-loader');
     var commentsCount = document.querySelector('.picture__comments').textContent;

     var showHiddenComments = function () {
       var COMM = parseFloat(document.querySelector('.comments-visual').textContent);
       var hiddenCommentCount = document.querySelectorAll('.social__comment.hidden').length;

         if (hiddenCommentCount > 5) {
           for (var m = 0; m < 5; m++) {
             document.querySelectorAll('.social__comment.hidden')[0].classList.remove('hidden');
           }
           document.querySelector('.comments-visual').textContent = COMM + 5;
         } else {
           for (var n = 0; n < hiddenCommentCount; n++) {
             document.querySelectorAll('.social__comment.hidden')[0].classList.remove('hidden');
           }
           document.querySelector('.comments-loader').classList.add('hidden');
           document.querySelector('.social__comment-count').classList.add('hidden');
         }
     }

    commentsLoader.addEventListener('click', showHiddenComments);

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
