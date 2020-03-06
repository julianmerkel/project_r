var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var documentGenerator = require('./documentGenerator');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hallo');

    var data = {
        kundenName : "SAP SE",

    };
    generateDocunment(data);
});


app.post('/bill', (req, res) => {
    var rechnungsDatum=req.body.rechnungsDatum;
    var anschrift=req.body.anschrift;
    var kundenNummer=req.body.kundenNummer;
    var umsatzSteuerNummer=req.body.umsatzSteuerNummer
    var geldBetrag=req.body.geldBetrag;
    var beschreibung=req.body.beschreibung;
    console.log("id: " + bill_id + ", price:  " +bill_price);
    res.end("yes");
});

app.listen(8080, () => {
    console.log("Started on PORT 8080");
})

function generateDocunment(data) {
    documentGenerator.generate(data);
}







