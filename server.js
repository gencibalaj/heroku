const { response } = require('express');
const express = require('express');
const url = require('url');
const app = express();

app.use(express.static(__dirname));

app.get('/',function(req,res) {
    console.log('we have a get request in /')
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3030, ()=>{console.log('server is listening on port 3030')})