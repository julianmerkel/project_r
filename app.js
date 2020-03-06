var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hallo');

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









