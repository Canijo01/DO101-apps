var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/marte', function (req, res) {
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
app.get('/urano', function (req, res) {
    res.send('Hello Urano!\n');
});
app.get('/neptuno', function (req, res) {
    res.send('Hello Saturno!\n');

});
app.get('/tierra', function (req, res) {
    res.send('Hello tierra!\n');

});
app.get('/sol', function (req, res) {
    res.send('Hello Sol!\n');

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

