const mongoose = require('mongoose');

exports.initMongoose = () => mongoose.connect('mongodb://mongodb:27017', (err) => {
    if (err) throw err;
    console.log('Connected to mongodb');
});
