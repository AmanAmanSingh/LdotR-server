const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.post("/addUser", userController.createUser);
router.get("/allUsers", userController.getUsers);
router.get('/user/:email', userController.getUserByEmail);


module.exports = router;