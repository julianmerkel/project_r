// Data to inject
const fs = require('fs');
const carbone = require('carbone');
var data = {
    firstname : 'Damon',
    lastname : 'stinkt'
};

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!
carbone.render('./template.docx', data, function(err, result){
    if (err) {
        return console.log(err);
    }
    // write the result
    fs.writeFileSync('result.docx', result);
});
