import jwt from 'jsonwebtoken';
const jwtAuth=(req,res,next)=>{
    //1.creating token
    const token=req.headers['authorization'];
    
    //2. if no token return error
    if(!token){
        return res.status(401).send('unauthorised');
    }
    //3. check if token is valid
    try {
        const payload=jwt.verify(token,'LAssfftijYn8kAHktJp0gHcx0CHU4tsn');
        req.userId=payload.userId;

    } catch (error) {
        return res.status(401).send('unauthorised');
    }

    next();
}

export default jwtAuth;