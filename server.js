const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");
const router = express.Router();

const app= express();

//set port
var port=process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));



//routes

router.get('/', function(req, res){
    res.sendFile("index.html");
});

router.get("/about", function(req, res){
    res.sendFile("about.html");
});



router.get('/contact', function(req, res){
    res.sendFile("contact.html");
});








app.listen(port, ()=> {
    console.log("app running")
});