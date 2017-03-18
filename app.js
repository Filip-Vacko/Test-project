var testModule = require("./testModule");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var receivedData = "";


testModule();

app.listen(3000);

app.get("/", function (req, res) {
    res.send("Hello World");

});

app.post("/", jsonParser, function (req, res) {
    receivedData = req.body.id;
    res.send("Hello World");
    console.log(receivedData);

});
