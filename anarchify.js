function anarchifyImage(info, tab) {
  var url = info.srcUrl
  if (info.mediaType == "video") {
    // Services such as imgur accept changing the extension from "webm" to "gif"
    if (!canConvertToGif(url)) {
      console.log("Can't convert video",url,"to gif")
      return;
    }
    url = rewriteExtensionToGif(url);
  }
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

function canConvertToGif(url) {
  var patterns = ["imgur.com", "giphy.com"]
  for (var i = 0; i < patterns.length; i++) {
    if (url.includes(patterns[i])) {
      return true;
    }
  };
  return false
}

function rewriteExtensionToGif(url) {
  return url.substr(0, url.lastIndexOf(".")) + ".gif"
}

chrome.contextMenus.create({
  "title": "Anarchify",
  "contexts": ["image","video"],
  "onclick": anarchifyImage
});
