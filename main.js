var $search = $('.animated-search-filter');

var json = [
  {
  "size": "225.4KB", "rev": "35e97029684fe",
  "thumb_exists": false,
  "bytes": 230783,
  "modified": "Tue, 19 Jul 2011 21:55:38 +0000",
  "path": "/Getting_Started.pdf",
  "is_dir": false,
  "icon": "page_white_acrobat",
  "root": "dropbox",
  "mime_type": "application/pdf",
  "revision": 220823
  }, {
  "size": "225.4KB",
  "rev": "35e97029684fe",
  "thumb_exists": false,
  "bytes": 230783,
  "modified": "Tue, 19 Jul 2011 21:55:38 +0000",
  "path": "/money.pdf",
  "is_dir": false,
  "icon": "page_white_acrobat",
  "root": "dropbox",
  "mime_type": "application/pdf",
  "revision": 220823
  }, {
  "size": "225.4KB",
  "rev": "35e97029684fe",
  "thumb_exists": false,
  "bytes": 230783,
  "modified": "Tue, 19 Jul 2011 21:55:38 +0000",
  "path": "/kittens.jpg",
  "is_dir": false,
  "icon": "page_white_acrobat",
  "root": "dropbox",
  "mime_type": "application/pdf",
  "revision": 220823
  }, {
  "size": "225.4KB",
  "rev": "35e97029684fe",
  "thumb_exists": false,
  "bytes": 230783,
  "modified": "Tue, 19 Jul 2011 21:55:38 +0000",
  "path": "/secrets-do-not-look.txt",
  "is_dir": false,
  "icon": "page_white_acrobat",
  "root": "dropbox",
  "mime_type": "application/pdf",
  "revision": 220823
  }, {
  "size": "225.4KB",
  "rev": "35e97029684fe",
  "thumb_exists": false,
  "bytes": 230783,
  "modified": "Tue, 19 Jul 2011 21:55:38 +0000",
  "path": "/fail.gif",
  "is_dir": false,
  "icon": "page_white_acrobat",
  "root": "dropbox",
  "mime_type": "application/pdf",
  "revision": 220823
  }
]

var count = 1;
_.map(json, function(file) {

    var even = (count % 2 == 0) 
                 ? 'even'
                 : '';

    $('.files ul').append(
      '<div class="file animate ' + even + '" >'
      + '<li><p>' + file.path + '</p></li>'
      + '</div>'
    );

    count++;

});

/*
var mic = new Wit.Microphone(document.querySelector(".search-box"));

var info = function (msg) {
  document.getElementById("info").innerHTML = msg;
};
var error = function (msg) {
  document.getElementById("error").innerHTML = msg;
};
mic.onready = function () {
  info("Microphone is ready to record");
};
mic.onaudiostart = function () {
  info("Recording started");
  error("");
};
mic.onaudioend = function () {
  info("Recording stopped, processing started");
};
mic.onresult = function (intent, entities) {
  var r = kv("intent", intent);

  for (var k in entities) {
    var e = entities[k];

    if (!(e instanceof Array)) {
      r += kv(k, e.value);
    } else {
      for (var i = 0; i < e.length; i++) {
        r += kv(k, e[i].value);
      }
    }
  }

  document.getElementById("result").innerHTML = r;
};
mic.onerror = function (err) {
  error("Error: " + err);
};
mic.onconnecting = function () {
  info("Microphone is connecting");
};
mic.ondisconnected = function () {
  info("Microphone is not connected");
};

mic.connect("SLQTHW3RFKTWFIISZCY2IUZQTP5RG7TW");
// mic.start();
// mic.stop();

function kv (k, v) {
  if (toString.call(v) !== "[object String]") {
    v = JSON.stringify(v);
  }
  return k + "=" + v + "\n";
}
*/
