const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://localhost/workbook', { useNewUrlParser: true })
        .then((result) => {
            console.log('Connected to db');
            // console.log(result);
        })
        .catch((error) => {
            console.log('Failed to connect');
            // console.log(error);
        });
}