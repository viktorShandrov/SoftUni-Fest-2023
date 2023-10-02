const jwt = require("./utils")

exports.auth= async(req,res,next)=>{
    // const token = req.body.userToken
    const token =  req.headers.authorization;
    console.log('token: ', token);
    if(token){
        req.user = await jwt.verify(token,jwt.secret)
    }
    next()
}
exports.isAuth= async(req,res,next)=>{
    
    if(req.user){
        next()
    }else{
        res.status(403).send("Forbidden for unauthenticated users")
    }


}