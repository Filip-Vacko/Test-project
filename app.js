var http = require("http");
var testModule = require("./testModule");
var express = require('express');
var app = express();

testModule();

app.listen(3000);

app.get("/", function (req, res) {
    res.send("Hello World");

})
