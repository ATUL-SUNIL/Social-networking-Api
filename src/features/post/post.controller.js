import postModel from "./post.model.js";

export default class postController{
    newPost(req,res){
        const{caption}=req.query;
        const imageUrl=req.file.filename;
        const userId=req.userId;
        postModel.newPost(userId,caption,imageUrl);
        res.status(201).send('post added successfully');
    }
    allPosts(req,res){
        const posts=postModel.allPosts();
        res.status(200).send(posts);
    }
    userPosts(req,res){
        const userId=req.userId;
        const posts=postModel.userPosts(userId);
        res.status(200).send(posts);
    }
    postById(req,res){
        const postId=req.params.postId;
        const post=postModel.postById(postId);
        res.status(200).send(post);
    }
    update(req,res){
        const postId=req.params.id;
        const{caption,imageUrl}=req.query;
        const userId=req.userId;

  
        const error=postModel.updatePost(userId,postId,caption,imageUrl)
        if(error){
            return res.status(400).send(error);
        }
        else{
            return res.status(200).send("post updated");
        }
    }
    delete(req,res){
        const{postId}=req.params.id;
        const userId=req.userId;
        const error=postModel.deletePost(userId,postId);
        if(error){
            return res.status(400).send(error);
        }
        else{
            return res.status(200).send("post deleted");
        }
    }
}