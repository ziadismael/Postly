import { Router } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/post.controller.js';
import authorize from '../middleware/auth.middleware.js';

const postRouter = Router();

postRouter.post('/', authorize, createPost);
postRouter.get('/', getPosts);
postRouter.get('/:id', getPostById);
postRouter.put('/:id', authorize, updatePost);
postRouter.delete('/:id', authorize, deletePost);

export default postRouter;