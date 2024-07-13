import commentModel from './comment.model.js';

export default class CommentController {
    new(req, res) {
        const userId = req.userId;
        const postId = req.params.postId;
        const content = req.body.content;
        const comment = commentModel.newComment(userId, postId, content);
        res.status(200).json(comment);
    }

    get(req, res) {
        const { postId } = req.params;
        const comments = commentModel.getComments(postId);
        return res.status(200).send(comments);
    }

    update(req, res) {
        const  commentId  = req.params.commentId;
        const  content  = req.query.content;
        const userId = req.userId;
        console.log(commentId);
        const error = commentModel.updateComment(userId, commentId, content);
        if (error) {
            return res.status(400).send(error);
        } else {
            return res.status(200).send("comment updated");
        }
    }

    delete(req, res) {
        const userId = req.userId;
        const { commentId } = req.params;
        const error = commentModel.deleteComment(userId, commentId);
        if (error) {
            return res.status(400).send(error);
        } else {
            return res.status(200).send("comment deleted");
        }
    }
}
