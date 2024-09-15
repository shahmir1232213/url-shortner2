const userModel = require("../model/user.model")

async function saveUserSignup(req,res){
    try{
        await userModel.create({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        console.log("Data Saved")
        return res.status(201).redirect("/user/login")
    }
    catch(err){
        return res.status(400).send(err);
    }
    
}

module.exports = {
    saveUserSignup,
}