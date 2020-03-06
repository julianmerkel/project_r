var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var documentGenerator = require('./documentGenerator');
const fetch = require('node-fetch');

const endpoint1 = 'http://172.16.14.9:8080/';


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

getC();



app.get('/', function (req, res) {
    res.send('hallo');

    var data = {
        kundenName : "SAP SE",

    };
    generateDocunment(data);
});


app.post('/bill', (req, res) => {
    var bill_id=req.body.billId;
    var bill_price=req.body.billPrice;
    console.log("id: " + bill_id + ", price:  " +bill_price);
    res.end("yes");
});

app.listen(8080, () => {
    console.log("Started on PORT 8080");
})

function generateDocunment(data) {
    documentGenerator.generate(data);
}
/*
async function getSystemCData() {
const res = await fetch(endpoint1);
return res;
}*/

function getC() {
    fetch(endpoint1)
        .then(res => res.json())
        .then(json => console.log(json));
}

