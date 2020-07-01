//Работа с попапом с фильтрами
var form = document.getElementById("upload-select-image");
var openFilter = document.querySelector(".img-upload__overlay");
var closeFilter = document.querySelector(".img-upload__cancel");
/*
var onFilterEscPress = function (evt) {
  if (evt.key === 27) {
    evt.preventDefault();
    closeFilterForm();
  }
};
*/
var openFilterForm = function () {
  openFilter.classList.remove("hidden");
  //document.addEventListener("keydown", onFilterEscPress);
};

var closeFilterForm = function () {
  openFilter.classList.add("hidden");
  //document.removeEventListener("keydown", onFilterEscPress);
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

document.addEventListener("keydown", function(evt) {
  if (evt.key === 27) {
  closeFilterForm();
  }
});
