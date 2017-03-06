var gsjson = require('google-spreadsheet-to-json');

gsjson({
    spreadsheetId: '11SfUjhoXnDKTjXofiA3EWtT2sorrIdK8ZZxvGnumRQM',
    // other options... 
})
    .then(function (result) {
        console.log(result.length);
        console.log(result);
    })
    .catch(function (err) {
        console.log(err.message);
        console.log(err.stack);
    });