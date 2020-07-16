//this code is heavily taken from the node file server lab


const fs = require('fs');
const path = require('path');
const pathToMimeType = require('./path-to-mime-type');

function serveStandards(req, res) {
  var pathname = new URL(req.url, 'http://localhost').pathname;
  //console.log(pathname);
  var filePath = path.join('/home/codio/workspace/cis526/cs4ks/public/', pathname);
  //console.log("before,pathname:",pathname);
  //url corrector:
  if(pathname == "/"){
    filePath ="/home/codio/workspace/cis526/cs4ks/public/index.html";
  };
  if(pathname == "/standards"){
    filePath ="/home/codio/workspace/cis526/cs4ks/public/standards.html";
  };
  //console.log("after,filepath:",filePath);
  
  fs.readFile(filePath, function(err, body){
  if(err) {
    console.error(err);
    res.statusCode = 404;
    res.statusMessage = "Not Found";
    res.end();
    return;
  }
  res.setHeader("Content-Length", body.length);
  res.setHeader("Content-Type", pathToMimeType(filePath));
  res.end(body);
    
    
  })
  
}
module.exports = serveStandards;
