const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./app/config/connection');
connectDB();

const PORT  = process.env.PORT || 3000;



//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get('/test', verifyToken, (req, res) => {
    const user = req.user;
    res.status(200).json({
        status: "success",
        message: `Hello, ${user.email}. You have access to this route.`,
        user
    });
});


app.listen(PORT , ()=>{
    console.log(`server is running on PORT : ${PORT}`)
})