const mongoose = require('mongoose');

exports.initMongoose = () => mongoose.connect('mongodb://10.46.131.209:27017', (err) => {
    if (err) throw err;
    console.log('Connected to mongodb');
});
