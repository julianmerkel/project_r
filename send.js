const request = require('request');

request.post('http://192.168.136.130:8080/bill', {
    json: {
        billId: 'asd',
        billPrice: '30'
    }
}, (error , res, body) => 
{
    if (error) {
        console.error(error)
        return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
})
