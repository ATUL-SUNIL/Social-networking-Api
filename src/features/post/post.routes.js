import express from 'express';
import postController from './post.controller.js';
import { upload } from "../../middleware/fileUpload.middleware.js";

const postRouter=express.Router();
const PostController=new postController();

postRouter.get('/all',PostController.allPosts);
postRouter.get('/:postId',PostController.postById);
postRouter.get('/',PostController.userPosts);
postRouter.post('/',upload.single('imageUrl'),PostController.newPost);
postRouter.delete('/:id',PostController.delete);
postRouter.put('/:id',PostController.update);

export default postRouter;