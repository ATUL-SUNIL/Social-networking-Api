import express from 'express';
import cors from 'cors';
import swagger from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type:'json'};;
import userRouter from './src/features/user/user.routes.js';
import postRouter from './src/features/post/post.routes.js';
import commentRouter from './src/features/comment/comment.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';


const server=express();
server.use(express.json());


//CORS POLICY 
server.use(cors());
//logger middleware
server.use(loggerMiddleware);

server.use('/api-docs',swagger.serve,swagger.setup(swaggerDocument));

server.use("/api/users",userRouter);
server.use("/api/posts",jwtAuth,postRouter);
server.use("/api/comments",jwtAuth,commentRouter);
server.use("/api/likes",jwtAuth,likeRouter);

server.get('/', (req, res)=>{
    res.send("Welcome to social media APIs");
});

//Error handler middleware
server.use((err,req,res,next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
    res.status(err.code).send(err.message)
    }
    else{
        res.status(500).send('something went wrong,please try again later')

    }
})

//middleware to handle 404

server.use((req,res)=>{
    res.status(404).send("API NOT FOUND.Please check our documentation for more info at localhost:3200/api-docs");
})

server.listen(3200,()=>{
    console.log("server is running on port 3200");
})