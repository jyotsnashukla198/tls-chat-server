var https      = require("https");
var fs         = require("fs");
var key_file   = "serverkey.pem";
var cert_file  = "server.cer";
var passphrase = "this is optional";
var config     = {
  key: fs.readFileSync(key_file),
 cert: fs.readFileSync(cert_file)
};
if(passphrase) {
  config.passphrase = passphrase;
}

https.createServer(config.app).listen(443);