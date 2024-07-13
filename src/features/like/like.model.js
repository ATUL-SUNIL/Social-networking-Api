import { ApplicationError } from "../../error-handler/applicationError.js";
import postModel from "../post/post.model.js";

export default class likeModel{
    constructor(userId,postId){
        this.likeId=likes.length+1;
        this.userId=userId;
        this.postId=postId;
    }

    static getAll(postId){
        const allLikes=likes.filter((l)=>l.postId==postId);
        return allLikes;
    }

    static addLike(userId,postId){
        const like=new likeModel(userId,Number(postId));
        likes.push(like);
        return like;
    }

    static removeLike(userId,postId){
        const likeIndex=likes.findIndex((l)=>l.userId==userId && l.postId==postId);
        console.log(likeIndex);
        
        likes.splice(likeIndex,1);
        
        
    }

    static toggleLike(userId, postId) {
        const existingLike = likes.find(like => like.userId == userId && like.postId == postId);
        if (existingLike) {
            const error=likeModel.removeLike(userId, Number(postId));
            if(!error){
            return { status: 'unliked' };
            }
            else{
                throw new ApplicationError(error,400);
            }
        } else {
            const like = likeModel.addLike(userId, postId);
            return { status: 'liked', like };
        }
    }
}
const likes=
[{
    likeId:1,
    userId:1,
    postId:1
},
{
    likeId:2,
    userId:2,
    postId:1
}
];