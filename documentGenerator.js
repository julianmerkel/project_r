// Data to inject

const fs = require('fs');
const carbone = require('carbone');



function generate(data) {
    carbone.render('./template.docx', data, function(err, result){
        if (err) {
            return console.log(err);
        }
        // write the result
        fs.writeFileSync('result.docx', result);
    });


}
module.exports = {
    generate
}