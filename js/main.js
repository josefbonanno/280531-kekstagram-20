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
  var avatarArrIndex = Math.floor(Math.random() * avatarArr.length);
  return avatarArr[avatarArrIndex];
}


var ESCAPE = 27;

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
  for (var i=0; i < getRandomNumber(5,7); i++) {
    comment[i] = {
     avatar: getRandomAvatar(1,6),
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
  comments: getRandomComment(),
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
 clonedNode.querySelector(".picture__comments").textContent = picturesDescription[i].comments.length;
 fragment.appendChild(clonedNode);
};

document.querySelector(".pictures").appendChild(fragment);

// Отображение big-picture
// Задание module3-task3

//document.querySelector(".big-picture").classList.remove("hidden"); // убираем у big-picture класс hidden
document.querySelector(".big-picture__img img").setAttribute("src", picturesDescription[0].url);
document.querySelector(".likes-count").textContent = picturesDescription[0].likes;
document.querySelector(".comments-count").textContent = picturesDescription[0].comments.length;

for (var i = 2; i < picturesDescription[0].comments.length; i++) {
 var socialComment = document.createElement("li");
 socialComment.className = "social__comment";
 var socialCommentImg = document.createElement("img");
 var socialCommentText = document.createElement("p");
 socialCommentImg.className = "social__picture";
 socialCommentText.className = "social__text";
 socialComment.append(socialCommentImg);
 socialComment.append(socialCommentText);
 socialCommentImg.setAttribute("src", picturesDescription[i-2].comments[i-2].avatar);
 socialCommentImg.setAttribute("alt", picturesDescription[i-2].comments[i-2].name);
 socialCommentText.innerHTML = picturesDescription[i-2].comments[i-2].message;

 document.querySelector(".social__comments").append(socialComment);
}

document.querySelector(".social__caption").textContent = picturesDescription[0].description;

document.querySelector(".social__comment-count").classList.add("hidden");
document.querySelector(".comments-loader").classList.add("hidden");
//document.querySelector("body").classList.add("modal-open");


//Работа с кнопками
/*
var bigPicture = document.querySelector(".big-picture");
var openPictures = document.querySelector(".pictures");

openPictures.addEventListener("click", function (evt) {
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
*/

//Работа с попапом с фильтрами
var form = document.getElementById("upload-select-image");
var openFilter = document.querySelector(".img-upload__overlay");
var closeFilter = document.querySelector(".img-upload__cancel");

var onFilterEscPress = function (evt) {
  if (evt.key === 27) {
    evt.preventDefault();
    closeFilterForm();
  }
};

var openFilterForm = function () {
  openFilter.classList.remove("hidden");

  document.addEventListener("keydown", onFilterEscPress);
};

var closeFilterForm = function () {
  openFilter.classList.add("hidden");

  document.removeEventListener("keydown", onFilterEscPress);
};

form.addEventListener("change", function() {
  openFilterForm();
});
form.addEventListener("keydown", function(evt) {
  if (evt.key === 13) {
    openFilterForm();
  }
});

closeFilter.addEventListener("click", function() {
  closeFilterForm();
});

closeFilter.addEventListener("keydown", function(evt) {
  if (evt.key === 13) {
  closeFilterForm();
  }
});

// Настройка фильтра

var imagePreview = document.querySelector(".img-upload__preview img");

document.querySelector(".img-upload__effects").addEventListener("change", function(evt) {
 evt.preventDefault();
 var input = evt.target;
 if (input.name != "effect") {
  return;
}
 var className = "effects__preview--";
 className += input.value;
 imagePreview.className = className;
});

// Валидация хэштегов

var hashTagsInput = document.querySelector(".text__hashtags");

hashTagsInput.addEventListener("change", function(evt) {
  evt.stopPropagation();
  var re = /^#[a-zа-яA-Z-А-Я0-9]*$/;
  var hashTagsText = hashTagsInput.value.toLowerCase();
  var hashtags = hashTagsText.split(" ");

  for (i=0; i < hashtags.length; i++) {
  if (hashtags.length > 5) {
    hashTagsInput.setCustomValidity("Можно ввести только 5 хэштегов");
  } else if (hashtags[i] === "#") {
    hashTagsInput.setCustomValidity("Хэштег не может состоять из одной #");
  }  else if (hashtags[i].length > 20) {
    hashTagsInput.setCustomValidity("Хэштег не должен быть длиннее 19 символов");
  } else if (hashtags[i] === hashtags[i-1]) {
    hashTagsInput.setCustomValidity("Хэштеги не могут повторяться");
  } else if (!(re.test(hashtags[i]))) {
    hashTagsInput.setCustomValidity("Хэштег начинается с решетки и включает спецсимволы");
  }
  else {
    hashTagsInput.setCustomValidity('');
  }
}
});



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
