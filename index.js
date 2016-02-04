/*
  Some prelim notes:
  1) Port can be specified vai process.env, if you wanted to do this via bash, you do PORT=9001 node sample.js
  2) The wildcard (*) notates all unused routes, this gives you the ability to server index.html on all unused routes, very handy for SPAs
  3) express.static() enables you to server static content from a resource or directory. This is handy for css, and, front end javascript files.
*/

//Require dependencies
var express = require('express');
var app = express();
var path = require('path');

//Server all content in the public folder.
app.use(express.static('./public'));

//Create custom API routes with RESTful nomenclature of Express
app.get("/custom/request", function(req,res) {
 res.status(200).send("I am custom request");
});

//Assume that there is a folder named public with index.html in it.
app.get('*', function(request, result) {
  result.sendFile(path.join(__dirname + '/public/sindex.html'));
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Your app listening port ' + PORT);
