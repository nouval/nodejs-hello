var express = require('express');
var app = express();

app.get('/',function(req,res) {
  // add comment
  res.send("<html><head/><body style='background-color:red'><h1>Hello World (nodejs)!</h1></body></html>");
});

app.listen(8080);
