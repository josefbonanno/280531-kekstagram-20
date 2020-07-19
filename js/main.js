'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  var picturesContainer = document.querySelector('.pictures');

  var bigPictureClose = function () {
    bigPicture.classList.add('hidden');
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
    document.querySelector('.comments-visual').textContent = 5;
  }




  var pictureTemplate = document.getElementById('picture').content;
  var fragment = document.createDocumentFragment();
  var pictures = [];
  var amount = 25;

  var picturesWrapper = document.querySelector('.pictures');

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

   var pictureElements = document.querySelectorAll('.picture');
   for (var i = 0; i < pictureElements.length; i++) {
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
   }

})();
