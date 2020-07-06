// Отображение big-picture
// Задание module3-task3

//document.querySelector(".big-picture").classList.remove("hidden"); // убираем у big-picture класс hidden
/*
var bigPicture = document.querySelector(".big-picture");

document.querySelector(".big-picture__img img").setAttribute("src", pictures[0].url);
document.querySelector(".likes-count").textContent = pictures[0].likes;
document.querySelector(".comments-count").textContent = pictures[0].comments.length;
document.querySelector(".social__caption").textContent = pictures[0].description;


document.querySelector(".social__comments").textContent =  "";

for (var i = 0; i < pictures[0].comments.length; i++) {

 var socialComment = document.createElement("li");
 socialComment.className = "social__comment";
 socialComment.className += " social__comment-added";
 var socialCommentImg = document.createElement("img");
 var socialCommentText = document.createElement("p");
 socialCommentImg.className = "social__picture";
 socialCommentText.className = "social__text";
 socialComment.append(socialCommentImg);
 socialComment.append(socialCommentText);
 socialCommentImg.setAttribute("src", pictures[0].comments[i].avatar);
 socialCommentImg.setAttribute("alt", pictures[0].comments[i].name);
 socialCommentText.innerHTML = pictures[0].comments[i].message;

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
*/

//module3-task3

//Работа с кнопками
var bigPicture = document.querySelector(".big-picture");
var picturesContainer = document.querySelector(".pictures");


var openPictures = function (pictureElement, picture) {
  //var target = evt.target.parentNode;
  //if (target.className === "picture") {
 pictureElement.addEventListener("click", function () {
   document.querySelector(".big-picture__img img").src = picture.url;
   document.querySelector(".likes-count").textContent = picture.likes;
   document.querySelector(".social__caption").textContent = picture.description;

   var socialCommentCount = document.querySelector(".picture__comments").textContent;
   socialCommentCount = picture.comments.length;

   document.querySelector(".social__comments").textContent =  "";

   for (var n = 0; n < socialCommentCount; n++) {

    var socialComment = document.createElement("li");
    socialComment.className = "social__comment";
    var socialCommentImg = document.createElement("img");
    var socialCommentText = document.createElement("p");
    socialCommentImg.className = "social__picture";
    socialCommentText.className = "social__text";
    socialComment.append(socialCommentImg);
    socialComment.append(socialCommentText);
    socialCommentImg.setAttribute("src", picture.comments[n].avatar);
    socialCommentImg.setAttribute("alt", picture.comments[n].name);
    socialCommentText.innerHTML = picture.comments[n].message;
    document.querySelector(".social__comments").appendChild(socialComment);
   }

   document.querySelector(".big-picture").classList.remove("hidden");

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
     });
     bigPicture.addEventListener("keydown", function (evt) {
       if (evt.keyCode === 13) {
       evt.preventDefault();
       bigPicture.classList.add("hidden");
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
