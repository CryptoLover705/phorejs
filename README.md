# SmartCrytoTechjs
SmartCryptoTech Javascript Library. This is a work in progress. 

## Install

```
git clone https://github.com/smartcryptotech/smartcryptotechjs.git
cd smartcryptotechjs

```

## Create a SmartCryptoTech Private Key (WIF and Hex) and Public Key Address

```
node app.js
```
This will log out the following to the console: 
```
console.log("Private Key (Wallet Import Format): " + ck.privateWif)
console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
console.log("Address: " + ck.publicAddress) // This is your pubKey for below
```

## Generate a QR Code for a SmartCryptoTech Public Key Address

```
node qr.js
```
This will log out a QR Code in data format to the console. Or replace the value of pubKey in the file qr.js with the one you just generated to get a QR code for that address.

```
var qr = require('qr-encode')

var pubKey = "SqvLsdHtaP1CWfcfE2GG1a8ERPY8CNna1m"; // Replace This with your pubKey

var dataURI = qr(pubKey, {type: 7, size: 7, level: 'V'})
console.log(dataURI)

//If using in browsers:
var img = new Image()
img.src = dataURI
document.body.appendChild(img)

```





