function anarchifyImage(info, tab) {
  var url = info.srcUrl
  postToAnarchy(url);
}

function postToAnarchy (url) {
  var destination = localStorage.anarchyUrl;
  
  if (destination != undefined && destination != null) {
    var r = new XMLHttpRequest();
    r.open("POST", destination, true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      // Do something here
    };
    r.send('<img src="' + url + '">');
  } else {
    alert('Set your anarchy url first');
  }
}

chrome.contextMenus.create({
  "title": "Anarchify",
  "contexts": ["image"],
  "onclick": anarchifyImage
});
