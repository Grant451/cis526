//this code is heavily taken from the blog pt 5 lab

const express = require('express');
const serveHomepage = require('./endpoints/serve-homepage');
const newPost = require('./endpoints/new-post');
const createPost = require('./endpoints/create-post');
const showPost = require('./endpoints/show-post');
const loadBody = require('./middleware/load-body');
const serveError = require('./serve-error');
const basicAuth = require('./middleware/basic-auth');
const newUser = require('./endpoints/new-user.js');
const createUser = require('./endpoints/create-user');
const newSession = require('./endpoints/new-session');
const createSession = require('./endpoints/create-session');

/** @module app 
 * The express application for our site
 */
var app = express();

app.get('/', serveHomepage);

app.get('/posts/new', basicAuth, newPost);
app.post('/posts', basicAuth, loadBody, createPost);
app.get('/posts/:id', showPost);
app.get("/signup", newUser);
app.post("/signup", loadBody, createUser);
app.get('/signin', newSession);
app.post("/signin", loadBody, createSession);


app.use(express.static('public'));

module.exports = app;