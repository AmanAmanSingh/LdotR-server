const mongoose = require('mongoose');
const User = require('../models/user-model');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("../config/connection");

const insertUsers = async () => {
    try {
        await connectDB();

        const users = [
            { username: 'aman', email: 'aman@gmail.com.com', age: 25 },
            { username: 'sandeep', email: 'sandeep@gmail.com', age: 24 },
        ];

        await User.insertMany(users);
        console.log('Users inserted successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};


insertUsers();
