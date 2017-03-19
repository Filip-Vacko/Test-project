"use strict";
const testModule = require("./testModule");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

testModule();

app.listen(3000);

app.get("/", function (req, res) {
    res.send("Hello World");

});

app.post("/", jsonParser, function (req, res) {
    let promise = new Promise(function(resolve, reject) {
        resolve(req.body.id);
        reject("There was an Error");
    });
    promise
        .then(function(value) {
            res.send("The following value was inserted correctly: " + value);
            console.log("This works!")
        })
        .catch(function(reason) {
            res.send("Sorry, operation could not be completed because of " + reason);
            console.log("There was an error")
        })
});
