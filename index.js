var express = require('express');
var app = express();
var fs = require("fs");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var server = app.listen(8000, function() {
    console.log("Server running.")
});

app.get('/', function(req, res){
    res.render("index")
});

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        res.end(data)
    });
})
