var mosca = require("mosca");
var settings ={port:2999}

var server = new mosca.Server(settings);

server.on('ready', function(){
    console.log("Hey I am broker and I am ready !!");
});