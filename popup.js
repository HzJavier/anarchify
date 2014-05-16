function setAnarchyDest (url) {
  localStorage.anarchyUrl = url;
  console.log("Ur local storage is: ");
  console.log(localStorage);
}

$(document).ready(function () {
  var btn = $('#setDestBtn');
  var textfield = $('#dest');

  btn.click(function () {
    var url = textfield.val();  
    setAnarchyDest(url);
  });
});
