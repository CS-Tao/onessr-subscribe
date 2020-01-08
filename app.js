var unirest = require("unirest");
const path = require("path")
const fs = require("fs")

function observe (cb) {
  var req = unirest("GET", 'https://jichangdaquan.com/node/429.html');

  req.headers({
    "cache-control": "no-cache",
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.29 Safari/537.36 Edg/79.0.309.18",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "acept-encoding": "gzip, deflate, br",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    cb(res.body);
  });
}


function cb (data) {
  const front = /data-clipboard-text="/
  const back = /">点击复制全部ssr节点/
  var ssrNodes = data.split(front)[1].split(back)[0]
  var result = Buffer.from(ssrNodes).toString('base64')
  var filePath = path.resolve(__dirname, 'public', 'onessr-sub.txt')
  fs.writeFile(filePath, result, function (e) {
    if (e) {
      throw new Error(e)
    } else {
      console.log('Saved to public/onessr-sub.txt.')
    }
  })
}

observe(cb)
