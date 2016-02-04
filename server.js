//Require dependencies
var express = require('express');
var app = express();
var path = require('path');
var r = require("rethinkdbdash")();
var bodyParser = require("body-parser");

require("rethink-config")({
"r": r,
"database": "Twitterjobbot",
"tables":["tweetlist"]
});

//Parse JSON/Forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Server all content in the public folder.
app.use(express.static('./public'));

//My first POST request
app.post("/job", function(req,res,next) {
  r.db("Twitterjobbot").table("tweetlist").insert({
    "company": req.body.company,
    "tweet": req.body.tweet,
    "date": new Date()
  }).then(function() {
    res.status(200).send("Job posted.")
  })
})

//My first GET request
app.get("/job", function(req,res,next) {
  r.db("Twitterjobbot").table('tweetlist').then(function(result) {
    res.status(200).send(result);
  })
})

//Assume that there is a folder named public with index.html in it.
app.get('*', function(request, result) {
  result.sendFile(path.join(__dirname + '/public/sindex.html'));
});

//specifies port and tells the express object to listen
var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Your app listening port ' + PORT);


//Bonus content: Some kind of nonsense i dont understand yet
//Create custom API routes with RESTful nomenclature of Express
/*app.get("/custom/request", function(req,res) {
 res.status(200).send("I am custom request");
}); */
