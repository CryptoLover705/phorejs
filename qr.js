var qr = require('qr-encode')

var pubKey = "SqvLsdHtaP1CWfcfE2GG1a8ERPY8CNna1m";

var dataURI = qr(pubKey, {type: 7, size: 7, level: 'V'})
console.log(dataURI)

//If using in browsers:
// var img = new Image()
// img.src = dataURI
// document.body.appendChild(img)
