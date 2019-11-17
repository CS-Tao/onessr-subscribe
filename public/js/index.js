function getLastUpdateTime (url, elementId) {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      document.getElementById(elementId).innerText = 'Last update: ' + (this.responseText ? this.responseText.replace('\n', '') : 'Error to fetch data');
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
  getLastUpdateTime(`https://home.cs-tao.cc/onessr-subscribe/last-update.txt?time=${this.Date.now()}`, 'last-update')
}
