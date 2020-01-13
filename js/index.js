function getLastUpdateTime (url, elementId) {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        document.getElementById(elementId).innerText = 'Last check: ' + (this.responseText ? this.responseText.replace('\n', '') : 'Error to fetch data');
      }
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.send(data);
}

window.onload = function () {
  getLastUpdateTime(`/onessr-subscribe/last-update.txt?time=${this.Date.now()}`, 'last-update');
}

var ipt = document.getElementById('input');
var title = document.getElementById('title');

ipt.onfocus = function () {
  this.select()
  title.classList.add('title-focus')
}

ipt.onblur = function () {
  title.classList.remove('title-focus')
}

var a_idx = 0;
$("html").click(function(e) {
  var a = new Array(
    "富强", "民主", "文明", "和谐",
    "自由", "平等", "公正", "法治",
     "爱国", "敬业", "诚信", "友善" 
  );
  var $i = $("<span/>").text(a[a_idx]);
  a_idx = (a_idx + 1) % a.length;
  var x = e.pageX,
  y = e.pageY;
  $i.css({
    "z-index": 1984,
    "top": y - 20,
    "left": x - 14,
    "position": "absolute",
    "font-weight": "bold",
    "color": "#ffde00"
  });
  $("html").append($i);
  $i.animate({
     "top": y - 180,
     "opacity": 0
   }, 2000,  function() {
      $i.remove()
   })
})
