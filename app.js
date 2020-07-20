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

function test (cb) {
  var data = fs.readFileSync('./test.html', {
    encoding: 'utf-8'
  })
  cb(data.toString())
}

function saveNodes (name, data, reg, fileName) {
  var ssrNodes = data.match(reg)
  if (ssrNodes.length) {
    ssrNodes = ssrNodes.map(node => node.replace(/\s/g, ''))
    var result = Buffer.from(ssrNodes.join('\n')).toString('base64')
    var filePath = path.resolve(__dirname, 'public', fileName)
    fs.writeFile(filePath, result, function (e) {
      if (e) {
        throw new Error(e)
      } else {
        console.log(`Saved to public/${fileName}.`)
      }
    })
  } else {
    console.error(`${name} nodes is empty.`)
    process.exit(1)
  }
}

function cb (data) {
  saveNodes('SS', data, /ss:\/\/[\s\S]*?(?=\">)/g, 'oness-sub.txt')
  saveNodes('SSR', data, /ssr:\/\/[\s\S]*?(?=\">)/g, 'onessr-sub.txt')
  saveNodes('V2ray', data, /vmess:\/\/[\s\S]*?(?=\">)/g, 'onev2ray-sub.txt')
}

try {
  observe(cb)
} catch (e) {
  console.error(e.message)
}

// test(cb)
