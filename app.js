var http = require("http");
var testModule = require("./testModule");
var mysql = require("mysql");
var fs = require("fs");
var scrapman = require("scrapman");
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.listen("8081");

exports = module.exports = app;

// var jsdom = require('jsdom'),
//     window = jsdom.jsdom().defaultView;

// jsdom.jQueryify(window, "../js/vendor/jquery.min.js", function(){
//     var $ = window.$;
// })

testModule();

http.createServer(function(req, res){
    res.writeHead(200, { "Content-type": "text/html" })
    var html = fs.readFileSync(__dirname + "/index.html");
    res.end(html);
}).listen(1337, "127.0.0.1")

// $('saButton').click(function () {
//     console.log("adfafds");
// }, 'json');

// scrapman.load("https://jizdenky.regiojet.cz/Booking/from/10202003/to/10202000/tarif/REGULAR/departure/20170217/retdep/20170217/return/false?0#search-results", function(results){
//     //results contains the HTML obtained from the url
//     console.log(results);
// });