'use strict'

// Создаем массив из 25 объектов


// Создаем 25 картинок

var pictureTemplate = document.getElementById("picture").content;

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector(".picture__img").setAttribute("src", picture.url);
  pictureElement.querySelector(".picture__likes").textContent = picture.likes;
  pictureElement.querySelector(".picture__comments").textContent = picture.comments.length;

  return pictureElement;
}
window.load(function (pictures) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 25; i++) {
   fragment.appendChild(renderPicture(pictures[i]));
  }

  document.querySelector(".pictures").appendChild(fragment);

});
