var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("<html><head/><body bgcolor='yellow'><h1>Hello World!</h1></body></html>");
});

app.listen(80);