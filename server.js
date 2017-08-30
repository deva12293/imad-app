var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var RefreshCounter= 0;
app.get('/RefreshCounter', function (req, res) {
RefreshCounter= RefreshCounter +1;
res.send(RefreshCounter.toString());
});

app.get('/ui/RefreshCounter.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'RefreshCounter.js'));
});

app.get('/education', function (req,res) {
res.sendFile(path.join(__dirname, 'ui', 'education.html'));
});

app.get('/aim', function (req,res) {
res.sendFile(path.join(__dirname, 'ui', 'aim.html'));
});

app.get('/maa', function (req,res) {
res.sendFile(path.join(__dirname, 'ui', 'maa.html'));   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/deva.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'deva.jpeg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
