// Валидация хэштегов
(function () {
var form = document.getElementById("upload-select-image"); // сделать глобальным
var hashTagsInput = document.querySelector(".text__hashtags");
var textAreaComment = document.querySelector(".text__description");

hashTagsInput.addEventListener("input", function(evt) {

var hashTagsInput = document.querySelector(".text__hashtags");
var textAreaComment = document.querySelector(".text__description");

hashTagsInput.addEventListener("change", function(evt) {
  evt.stopPropagation();
  var re = /^#[a-zа-яA-Z-А-Я0-9]*$/;
  var hashTagsText = hashTagsInput.value.toLowerCase();
  var hashtags = hashTagsText.split(" ");

  for (i=0; i < hashtags.length; i++) {
  if (hashtags.length > 5) {
    hashTagsInput.setCustomValidity("Можно ввести только 5 хэштегов");
   } else if (hashtags[i] === "#") {
     form.reportValidity();
    hashTagsInput.setCustomValidity("Хэштег не может состоять из одной #");
    form.reportValidity();
   }  else if (hashtags[i].length > 20) {
    hashTagsInput.setCustomValidity("Хэштег не должен быть длиннее 19 символов");
    form.reportValidity();
   } else if (hashtags[i] === hashtags[i-1]) {
    hashTagsInput.setCustomValidity("Хэштеги не могут повторяться");
    form.reportValidity();
   } else if (!(re.test(hashtags[i]))) {
    hashTagsInput.setCustomValidity("Хэштег начинается с решетки и включает спецсимволы");
    form.reportValidity();
   }
  else {
    hashTagsInput.setCustomValidity('');
   }
  }
 });

textAreaComment.addEventListener("input", function(evt) {
   evt.stopPropagation();
   if (textAreaComment.length > 140) {
     textAreaComment.setCustomValidity("Комментарий не должен быть длиннее 140 символов");
   } else {
     textAreaComment.setCustomValidity('');
   }
 });

})();
