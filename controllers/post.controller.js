import Post from '../models/post.model.js';

// @desc    Create a new post
// @route   POST /api/posts
const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const post = new Post({
      title,
      content,
      user: req.user._id, // Link the post to the logged-in user
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

// @desc    Get all posts
// @route   GET /api/posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('user', 'name email'); // Populate with user's name and email
    res.json(posts);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

// @desc    Get single post by ID
// @route   GET /api/posts/:id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      'user',
      'name email'
    );

    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the logged-in user is the author of the post
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the logged-in user is the author of the post
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await post.deleteOne();
    res.json({ message: 'Post removed' });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export { createPost, getPosts, getPostById, updatePost, deletePost };

