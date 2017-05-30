var express = require('express');
var app = express();

app.get('/',function(req,res) {

  res.send("<html><head/><body style='background-color:green'><h1>Hello World (nodejs)!</h1></body></html>");
});

app.listen(8000);
