var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultSoma = soma(body.a, body.b);
    var resultSub = subtracao(body.a, body.b);
    var resultMult = multiplicacao(body.a, body.b);
    var resultDiv = divisao(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultSoma}`);
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultSub}`);
    res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultMult}`);
    res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultDiv}`);
});

app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

