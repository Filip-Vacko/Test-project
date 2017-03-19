"use strict";
const testModule = require("./testModule");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Ajv = require('ajv');
const validator = new Ajv({coerceTypes: true, useDefaults: true});

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
