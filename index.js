var express = require("express");

var path =  require("path");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.normalize(__dirname))); 

app.get('/' , function(request , response){
	response.sendFile(__dirname + "/app/index.html");
});

app.listen(port, function() {
    console.log("Express server started at PORT: " + port);
});