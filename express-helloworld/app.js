var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
    res.send('Hello Mars!\n');
});
app.get('/venus', function (req, res) {
    res.send('Hello Venus!\n');
});
app.get('/jupiter', function (req, res) {
    res.send('Hello Jupiter!\n');
});
app.get('/mercurio', function (req, res) {
    res.send('Hello Mercurio!\n');
});
app.get('/jupiter', function (req, res) {
    res.send('Hello Jupiter!\n');
});
app.get('/saturno', function (req, res) {
    res.send('Hello Saturno!\n');

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

