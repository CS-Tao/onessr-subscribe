const fs = require('fs')
const path = require('path')
const { observe } = require('./observer')
const meta = require('./meta')
const OUTPUT_DIR = 'public'

function convert (content) {
  return content.replace(/<p>/g, '').replace(/<\/p>/g, '\n')
}

function cb (data) {
  var result = Buffer.from(convert(data[0].articleContent)).toString('base64')
  var filePath = path.resolve(__dirname, OUTPUT_DIR, 'onessr-sub.txt')
  fs.writeFile(filePath, result, function (e) {
    if (e) {
      throw new Error(e)
    } else {
      console.log('Saved to public/onessr-sub.txt.')
    }
  })
}

observe(meta.api, meta.options, cb)
