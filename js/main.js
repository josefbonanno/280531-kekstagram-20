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
  for (var i=0; i < getRandomNumber(2,7); i++) {
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
