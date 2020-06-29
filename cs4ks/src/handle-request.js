//this code is heavily taken from the node file server lab

const serveFile = require('./serve-file');

function handleRequest(req, res) {
  if(req.method !== 'GET') return res.writeHead(501).end();
  serveFile(req, res);
}
module.exports = handleRequest;