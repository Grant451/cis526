//the majority of this code is from the first ejs lab.
//I'm not finished with this segment, I plan to refactor this to use an ejs modle

/*

const fs = require('fs');
const path = require('path');
const serveFile = require('./serve-file');
const ejs = require('ejs');

function listDirectory(req, res) {
  
  var pathname = new URL(req.url, "http://localhost").pathname;
  var dirPath = path.join('public', pathname);
  
  fs.readdir(dirPath, (err, entries) => {
    if(err) return req.writeHead(404).end();
    
    // Check for an index file 
    if(entries.includes('index.html')) {
      req.url = path.join(req.url, 'index.html');
      serveFile(req, res);
      return;
    }
    
    var data = {
      pathname: pathname,
      entries: entries,
      path: path
    }
    ejs.renderFile("templates/standards.ejs", data, function(err, html){
      // TODO: Serve the page
      // Handle an error
      if(err) {
        console.error(err);
        res.writeHead(500).end();
        return;
      }
      // Serve the page
      res.writeHeader(200, {
        "Content-Type": "text/html",
        "Content-Length": html.length
      }).end(html);
    });
    
  });
}

module.exports = listDirectory;
*/