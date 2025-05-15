const router = require('express').Router();
const blog = require('../models/blog.js');

// Create a new blog post
router.post('/new', async (req, res) => {
    const newBlog = new blog(req.body);
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all blog posts
router.get('/all', async (req, res) => {
    try {
        const blogs = await blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get a single blog post by ID
router.get('/get/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blogPost = await blog.findById(id);
        if (!blogPost) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete a blog post
router.delete('/delete/:id', async (req, res) => {
    try {
        id = req.params.id;
        const deletedBlog = await blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update a blog post
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBlog = await blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
        
    } catch (err) {
        res.status(500).json(err);
    }
}
);
module.exports = router;


