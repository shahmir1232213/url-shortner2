const userModel = require("../model/user.model")
const services = require("../services/service")
/*StateFul Authentication
const { v4: uuidv4 } = require('uuid')*/

//Stateless Authentication
const jwt = require("jsonwebtoken")
const secretKey = "QWEshahmir@1";

async function authFunc(req,res) {
    try{ 
        let finduser = await userModel.findOne({
            email:req.body.email
        });
        if(finduser != null){
            if(finduser.password == req.body.password){
                console.log("log in sucessful")
               /* StateFul Authentication
                const sessionID = uuidv4(); 
                services.setUser(sessionID,finduser)
                console.log("Services: ",services.getUser(sessionID))
                res.cookie("uid",sessionID)*/
                const token = services.setToken(finduser)
                res.cookie("token",token);
                return res.status(201).render("home")
            }
            else{
                console.log("Incorrect Password")
                return res.status(400).render("login", { error: "Incorrect Password" });
            }
        } 
        else{
            console.log("User Not Found")
            return res.status(500).render("login",{error:"User Not Found"});
        }  
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err);
    }
}

module.exports = authFunc;