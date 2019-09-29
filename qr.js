var QRCode = require('qrcode')
 
QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
  console.log(url)
})