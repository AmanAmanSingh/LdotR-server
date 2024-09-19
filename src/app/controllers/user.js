const User = require("../models/user-model");

const createUser = async (req, res) => {
    try {
        const { username, email, age } = req.body;


        if (!username || !email || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }


        const newUser = await User.create({
            username,
            email,
            age,
        });

        return res.status(201).json({
            status : "success",
            newUser
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

};


const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            users
        });
    } catch (error) {
        res.status(500).json({
            message: error.messsage
        });
    }
};



const getUserByEmail = async (req, res) => {
    try {

        const email  = req.params.email;
        console.log(email)
        const user = await User.findOne({
            email
        });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.messsage
        });
    }

}


module.exports = {
    createUser,
    getUsers,
    getUserByEmail
}