const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const category = require(__dirname + "/data.js");


const app = express();
app.use(express.static(__dirname));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html")
});

app.get('/admin', function (req, res) {
    res.sendFile(__dirname + "/admin_page.html")
});

app.get('/catogories', function (req, res) {

    //let category = categories();
    res.sendFile(__dirname + "/catogories.html")
});

app.get('/Products', function (req, res) {
    res.sendFile(__dirname + "/Products.html")
});


app.listen(3000, function () {
console.log('server i up');
});