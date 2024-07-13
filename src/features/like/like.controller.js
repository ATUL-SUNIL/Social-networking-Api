import likeModel from "./like.model.js";

export default class LikeController{
    getAll(req,res){
        const postId=req.params.postId;
        const likes=likeModel.getAll(postId);
        if(likes){
        return res.status(200).send(likes);
        }
        else{
            return res.status(400).send("no likes found")
        }
    }

    toggle(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=likeModel.toggleLike(userId,postId);
        res.status(200).json(result);

    }
}