const services = require("../services/service")
const authFuncsObj = require("../controller/auth")

const jwt = require("jsonwebtoken")

async function restrictedToLoggedInUsers(req,res,next){
    /*
    StateFul Authentication
    
    const uid = req.cookies.uid;
    const user = service.getUser(uid)
    console.log("uid: ",uid)
    console.log("user: ",user)
    if(!uid || !user){ 
        res.redirect("/user/login")
        console.log("No UID or User found, redirecting to login"); 
    }
    else{
        req.user = user;
        console.log("User authenticated, proceeding");
        next()
    }
    */
    
   //Stateless Authentication
   const token = req.cookies.token;
   if(!token){
        return res.redirect("/user/login")
        console.log("No token found, redirecting to login"); 
    }
   else{ 
        try{
            const decoded = services.getToken(token);
            //req.user = decoded;  
            console.log("User authenticated, proceeding");
            next();  // Continue to the next middleware
        } 
        catch (err) {
            if (err.name === 'TokenExpiredError') {
                console.log("Token expired, redirecting to login");
                return res.redirect("/user/login");
            } 
            else {
                console.log("Token verification failed:", err.message);
                return res.status(401).send("Unauthorized");
            }
        }
    }
}
module.exports = {
    restrictedToLoggedInUsers,
}