'use strict'

// Создаем массив из 25 объектов
var picturesDescription = [];

var getRandomNumber = function (min, max) {
 return Math.floor(Math.random() * (max-min+1)) + min;
};

var getRandomMessage = function () {
 var indexMessage = Math.floor(Math.random() * messageArr.length);
 return messageArr[indexMessage];
};

var getRandomDescription = function () {
 var indexDescr = Math.floor(Math.random() * descriptionArr.length);
 return descriptionArr[indexDescr];
};

var getRandomAvatar = function(min, max) {
 var randomAvatar = Math.floor(Math.random() * (max-min+1)) + min;
 var randomAvatarSrc = "img/avatar-" + randomAvatar + ".svg";
 return randomAvatarSrc;
};

var getRandomName = function() {
  var randomName = Math.floor(Math.random() * avatarArr.length);
}


var avatarArr = ["Вася", "Женя", "Петя", "Илья", "Максим", "Александр", "Софья", "Аня", "Иван"];

var messageArr = [
 "В целом всё неплохо. Но не всё.",
 "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
 "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
 "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
 "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

var descriptionArr = [
 "Тестим новую камеру!",
 "Затусили с друзьями на море",
 "Как же круто тут кормят",
 "Отдыхаем...",
 "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
 "Вот это тачка!"
];

var getRandomComment = function() {
  var comment = [];
  for (var i=0; i < getRandomNumber(1,5); i++) {
    comment[i] = {
     avatar: getRandomAvatar(),
     message: getRandomMessage(),
     name: getRandomName(),
   }
  }
 return comment;
}

// Заполняем массив объектами
for (var i=0; i < 25; i++) {
 picturesDescription[i] = {
  url: "photos/" + (i+1) + ".jpg",
  likes: getRandomNumber(15,200),
  comments: getRandomComment().length, // Math.floor(Math.random() * getRandomComment)
  description: getRandomDescription(),
 }
}

// Создаем 25 картинок

var pictureTemplate = document.getElementById("picture").content;
var fragment = document.createDocumentFragment();

for (var i=0; i < 25; i++) {
 var clonedNode = pictureTemplate.cloneNode(true);
 clonedNode.querySelector(".picture__img").setAttribute("src", picturesDescription[i].url);
 clonedNode.querySelector(".picture__likes").textContent = picturesDescription[i].likes;
 clonedNode.querySelector(".picture__comments").textContent = picturesDescription[i].comments;
 fragment.appendChild(clonedNode);
};

document.querySelector(".pictures").appendChild(fragment);


//document.querySelector(".big-picture").classList.remove("hidden"); // убираем у big-picture класс hidden
//document.querySelector(".big-picture__img img").setAttribute("src", picturesDescription[0].url);
document.querySelector(".likes-count").textContent = picturesDescription[0].likes;
document.querySelector(".comments-count").textContent = picturesDescription[0].comments.length;
var socialImg = document.querySelectorAll(".social__comment .social__picture");
for (var i = 0; i < socialImg.length; i++) {
 socialImg[i].setAttribute("src", getRandomAvatar(1,6));
}

//document.querySelector(".social__comment-loadmore").classList.add("hidden");
//document.querySelector(".social__comment-count").classList.add("hidden");
// document.querySelector(".social__comment--text").textContent = picturesDescription[0].comments;

//Работа с кнопками
var bigPicture = document.querySelector(".big-picture");
var openPictures = document.querySelector(".pictures");

fragment.addEventListener("click", function (evt) {
 evt.preventDefault();
 var target = evt.target.parentNode;
 if (target.className === "picture") {
   var imgsrc = target.querySelector(".picture__img").getAttribute("src");
   document.querySelector(".big-picture__img img").setAttribute("src", imgsrc);
   var socialComment = document.querySelectorAll(".social__comment");
   for (var i = 0; i < socialComment.length; i++) {
    socialComment[i].querySelector(".social__picture").setAttribute("src", getRandomAvatar(1,6));
    socialComment[i].querySelector(".social__text").textContent = picturesDescription[Math.floor(Math.random() * picturesDescription.length)].comments;
   }
   document.querySelector(".social__caption").textContent = picturesDescription[Math.floor(Math.random() * picturesDescription.length)].description;
   document.querySelector(".big-picture").classList.remove("hidden");
 }
var closePictures = bigPicture.querySelector(".big-picture__cancel");
  closePictures.addEventListener("click", function (evt) {
   evt.preventDefault();
   bigPicture.classList.add("hidden");
  });
 document.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
    evt.preventDefault();
    bigPicture.classList.add("hidden");
   }
  bigPicture.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
    evt.preventDefault();
    bigPicture.classList.add("hidden");
   }
  })
 });

});


//Работа с попапом с фильтрами

var uploadButton = document.querySelector(".img-upload__label");
var filterOverlay = document.querySelector(".img-upload__overlay");
var closeOverlay = document.querySelector(".img-upload__cancel");

uploadButton.addEventListener("click", function (evt) {
 evt.preventDefault();
 filterOverlay.classList.remove("hidden");
 var closeOverlay = document.querySelector(".img-upload__cancel");
 closeOverlay.addEventListener("click", function (evt){
  evt.preventDefault();
  filterOverlay.classList.add("hidden");
 });
});

// Настройка фильтра
var getForm = document.getElementById("upload-select-image");
var imagePreview = document.querySelector(".img-upload__preview img");

getForm.addEventListener("change", function(evt) {
 evt.preventDefault();
 var input = evt.target;
 if (input.name != "effect") {
  return;
}
 var className = "effects__preview--";
 className += input.value;
 imagePreview.classList.add(className);
});

//var className = "effects__preview--chrome";
//document.querySelector(".img-upload__preview img").classList.add(className);


/*

var scaleLine = document.querySelector(".scale__line");
var scaleHandle = document.querySelector(".scale__pin");
var scaleLevel = document.querySelector(".scale__level");

scaleHandle.addEventListener("mousedown", function (evt) {
  evt.preventDefault();
  var coords = {
    x: 280,
    y: 725,
  }
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  // вся основная логика происходит в обработчике mouseMove
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
  if (280 < startCoords.x && startCoords.x < 725) {
  scaleHandle.style.left = (scaleHandle.offsetLeft - shift.x) + "px";
  scaleLevel.style.width = (scaleHandle.offsetLeft - shift.x) + "px";
}
 };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();Q
   document.removeEventListener("mousemove", onMouseMove);
   document.removeEventListener("mouseup", onMouseUp);
  };
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
})
*/
