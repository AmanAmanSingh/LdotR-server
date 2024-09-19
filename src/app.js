const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const server = require("./server")
const userRoute = require("./app/routes/userRoutes")

const EXPRESS_PORT  = process.env.EXPRESS_PORT || 8000;
const BASIC_SERVER_PORT  = process.env.BASIC_SERVER_PORT || 4200;



//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get("/test", (req, res)=>{
        res.send("hello from express")
})


//DB connection
const connectDB = require('./app/config/connection');
connectDB();



app.use('/api/v1.0/', userRoute);

//Express Server
app.listen(EXPRESS_PORT , ()=>{
    console.log(`Server running at : ${EXPRESS_PORT}`)
})


// basic Node.js server
server.listen(BASIC_SERVER_PORT, () => {
    console.log(`Basic Node.js Server running at ${BASIC_SERVER_PORT}`);
});