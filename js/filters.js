//module3-task2
// Настройка фильтра

var imagePreview = document.querySelector(".img-upload__preview img");

document.querySelector(".img-upload__effects").addEventListener("change", function(evt) {
 var input = evt.target;
 if (input.name != "effect") {
  return;
}
 var className = "effects__preview--";
 className += input.value;
 imagePreview.className = className;
});




// SCALE??????
var scaleLine = document.querySelector(".effect-level__line");
var scaleHandle = document.querySelector(".effect-level__pin");
var scaleLevel = document.querySelector(".effect-level__depth");

scaleHandle.addEventListener("mousedown", function (evt) {
  evt.preventDefault();
  var lineWidth = scaleLine.offsetWidth;
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
  if (scaleHandle.offsetLeft < 0) {
    scaleHandle.style.left = 0 + "px";
    scaleLevel.style.width = 0 + "px";
  } else if (scaleHandle.offsetLeft > lineWidth) {
    scaleHandle.style.left = lineWidth + "px";
    scaleLevel.style.width = lineWidth + "px";
  } else {
    scaleHandle.style.left = (scaleHandle.offsetLeft - shift.x) + "px";
    scaleLevel.style.width = (scaleHandle.offsetLeft - shift.x) + "px";
  }
 };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
   document.removeEventListener("mousemove", onMouseMove);
   document.removeEventListener("mouseup", onMouseUp);
  };
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
})
