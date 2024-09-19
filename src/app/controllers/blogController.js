const Blog = require('../models/blogModel');


const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newBlog = await Blog.create({
            title,
            content,
            author
        });

        res.status(201).json({
            status: "success",
            newBlog
        });

    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        return res.status(200).json(blogs);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs' });
    }
};


const updateBlog = async (req, res) => {
    try {
        // console.log(req.params.id, req.body);
        
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (blog) {
            res.status(200).json({
                status: "success",
                blog
            });
        } else {
            res.status(404).json({
                message: "Blog not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: message.error
        });
    }

}


const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const blog = await Blog.findByIdAndDelete({ _id: id });
        if (blog) {
            res.status(201).json({
                message: "Blog deleted"
            });
        } else {
            res.status(404).json({
                message: "Blog not found"
            });
        }

    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        })

    }
}

module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}

