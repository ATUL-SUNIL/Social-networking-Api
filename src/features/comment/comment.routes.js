import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter.get('/:postId', commentController.get.bind(commentController));
commentRouter.post('/:postId', commentController.new.bind(commentController));
commentRouter.delete('/:commentId', commentController.delete.bind(commentController));
commentRouter.put('/:commentId', commentController.update.bind(commentController));

export default commentRouter;
