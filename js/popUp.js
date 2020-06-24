// Отображение big-picture
// Задание module3-task3

//document.querySelector(".big-picture").classList.remove("hidden"); // убираем у big-picture класс hidden
var bigPicture = document.querySelector(".big-picture");

document.querySelector(".big-picture__img img").setAttribute("src", picturesDescription[0].url);
document.querySelector(".likes-count").textContent = picturesDescription[0].likes;
document.querySelector(".comments-count").textContent = picturesDescription[0].comments.length;
document.querySelector(".social__caption").textContent = picturesDescription[0].description;


document.querySelector(".social__comments").textContent =  "";

for (var i = 0; i < picturesDescription[0].comments.length; i++) {

 var socialComment = document.createElement("li");
 socialComment.className = "social__comment";
 socialComment.className += " social__comment-added";
 var socialCommentImg = document.createElement("img");
 var socialCommentText = document.createElement("p");
 socialCommentImg.className = "social__picture";
 socialCommentText.className = "social__text";
 socialComment.append(socialCommentImg);
 socialComment.append(socialCommentText);
 socialCommentImg.setAttribute("src", picturesDescription[0].comments[i].avatar);
 socialCommentImg.setAttribute("alt", picturesDescription[0].comments[i].name);
 socialCommentText.innerHTML = picturesDescription[0].comments[i].message;

 document.querySelector(".social__comments").append(socialComment);
}

document.querySelector(".social__comment-count").classList.add("hidden");
document.querySelector(".comments-loader").classList.add("hidden");

var closePictures = bigPicture.querySelector(".big-picture__cancel");
  closePictures.addEventListener("click", function (evt) {
   evt.preventDefault();
   bigPicture.classList.add("hidden");
  });
//document.querySelector("body").classList.add("modal-open");










//module3-task3

//Работа с кнопками
var bigPicture = document.querySelector(".big-picture");
var pictures = document.querySelector(".pictures");


var openPictures = function (evt) {
  var target = evt.target.parentNode;
  if (target.className === "picture") {

    var imgsrc = target.querySelector(".picture__img").getAttribute("src");
    document.querySelector(".big-picture__img img").setAttribute("src", imgsrc);
    document.querySelector(".likes-count").textContent = target.querySelector(".picture__likes").textContent;
    document.querySelector(".social__caption").textContent = picturesDescription[Math.floor(Math.random() * picturesDescription.length)].description;

    var socialCommentCount = target.querySelector(".picture__comments").textContent;

    document.querySelector(".social__comments").textContent =  "";

    for (var i = 0; i < socialCommentCount; i++) {

     var socialComment = document.createElement("li");
     socialComment.className = "social__comment";
     var socialCommentImg = document.createElement("img");
     var socialCommentText = document.createElement("p");
     socialCommentImg.className = "social__picture";
     socialCommentText.className = "social__text";
     socialComment.append(socialCommentImg);
     socialComment.append(socialCommentText);
     socialCommentImg.setAttribute("src", picturesDescription[Math.floor(Math.random() * picturesDescription.length)].comments[Math.floor(Math.random() * socialCommentCount.length)].avatar);
     socialCommentImg.setAttribute("alt", picturesDescription[Math.floor(Math.random() * picturesDescription.length)].comments[Math.floor(Math.random() * socialCommentCount.length)].name);
     socialCommentText.innerHTML = picturesDescription[Math.floor(Math.random() * picturesDescription.length)].comments[Math.floor(Math.random() * socialCommentCount.length)].message;
     document.querySelector(".social__comments").appendChild(socialComment);
    }

    document.querySelector(".big-picture").classList.remove("hidden"); // убираем класс хидден и отображаем большую картинку
  }

  document.querySelector(".social__comment-count").classList.add("hidden");
  document.querySelector(".comments-loader").classList.add("hidden");

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
}

pictures.addEventListener("click", openPictures);
