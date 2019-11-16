var unirest = require("unirest");

function observe (url, query, cb) {
  var req = unirest("GET", url);

  req.query({
    "offset": query.offset || 0,
    "pageSize": query.pageSize || 4
  });

  req.headers({
    "cache-control": "no-cache",
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate",
    "Host": "onessr.ml",
    "Cache-Control": "no-cache",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.29 Safari/537.36 Edg/79.0.309.18",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "referer": "https://onessr.ml",
    "origin": "https://onessr.ml",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "acept-encoding": "gzip, deflate, br",
    "accept": "*/*"
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    if (res.body.code == 200 && res.body.data.length !== 0) {
      cb(res.body.data);
    } else {
      throw new Error("请求失败");
    }
  });
}

module.exports = {
  observe
}
