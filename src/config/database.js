const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://mukeshshrikar11:cEdsRoeeKrGvpNrm@learnmongodb.lcllpab.mongodb.net/devTinder'
    );
};
module.exports = connectDB;


