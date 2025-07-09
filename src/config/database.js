const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://mukeshshrikar11:cEdsRoeeKrGvpNrm@learnmongodb.lcllpab.mongodb.net/'
    );
};

connectDB().then(() => {
    console.log('Database Connected');
}).catch(err => {
    console.log("Database Connection Error:");
})

