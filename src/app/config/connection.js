const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const mongoURI = process.env.MONGO_URI;

function connection(){
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = connection;