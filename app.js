var http = require("http");
var testModule = require("./testModule");

testModule();

http.createServer(function(req, res){
    res.writeHead(200, { "Content-type": "text/html" })
    var html = fs.readFileSync(__dirname + "/index.html");
    res.end(html);
}).listen(1338, "127.0.0.1")

