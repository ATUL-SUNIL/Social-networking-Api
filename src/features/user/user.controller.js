import userModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController{
    signUp(req,res){
        const{name,email,password}=req.body;
        const user=userModel.signUp(name,email,password);
        res.status(201).send(user);
    }

    signIn(req,res){
        const result=userModel.signIn(req.body.email,req.body.password);
        
        if(!result){
            return res.status(400).send("incorrect crentials")
        }
        else{
            //1. create token
            const token=jwt.sign({userId:result.userId,email:result.email},
                'LAssfftijYn8kAHktJp0gHcx0CHU4tsn',
                {expiresIn:'1h'})
            //2. send token
            return res.status(200).send(token);
        }
    }
}