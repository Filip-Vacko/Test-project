"use strict";
const testModule = require("./testModule");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Ajv = require('ajv');
const validator = new Ajv({coerceTypes: true, useDefaults: true});
const marko = require('marko/node-require');
const markoTemplate = require('./views/hello');
const moment = require('moment');

const idObject = {
    type: "object",
    properties: {
        name: {type: "string", minLength: 2, maxLength: 50},
        email: {type: "string", format: "email"},
        id: {type: "string", minLength: 1}
    },
    required: ["id"],
    additionalProperties: true
};

testModule();

app.listen(3000);

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let testArray = ["testing, ", "for, ", "each, ", "array, ", "successful."];
    testArray.forEach(function(parameter) {
        console.log(parameter);
    });
    res.render('index'); //this checks in a "views" folder for a file with a name of "index" with extension set in the second parameter of "app.set" (".ejs" in this case)

});

app.get("/marko", function (req, res) {
    // let the browser know html is coming
    res.setHeader('content-type', 'text/html');

    // render the output to the `res` output stream
    markoTemplate.render({ name:'Marko' }, res);
});

app.get("/today", function (req, res) {
    res.send('So glad you came here on ' + moment().format('dddd')); //the moment function returns current day in the format specified in the .format()
});

app.post("/", jsonParser, function (req, res) {
    let promise = new Promise(function(resolve, reject) {
        resolve(req.body.id);
        reject("There was an Error");
    });
    promise
        .then(function(value) {
            let valid = validator.validate(idObject, req.body);
            if (!valid)
                this.throw(400, JSON.stringify(ajv.errors));
            res.send("The following value was inserted correctly: " + value);
            console.log("This works!")
        })
        .catch(function(reason) {
            res.send("Sorry, operation could not be completed because of " + reason);
            console.log("There was an error")
        })
});
