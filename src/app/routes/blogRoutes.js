const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");



router.get("/allBlogs", blogController.getBlogs);
router.post("/addBlog", blogController.createBlog);
router.put("/updateBlog/:id", blogController.updateBlog);
router.delete("/removeBlog/:id", blogController.deleteBlog);


module.exports = router;
