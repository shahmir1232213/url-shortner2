const userModel = require("../model/user.model")
const userHandler = require("../controller/user.fucntions")
const express = require("express")
const router = express.Router();
const authFunc = require("../controller/auth")

router.get("/",(req,res)=>{
    return res.render("signup")
})
router.post("/post",userHandler.saveUserSignup)
router.get("/login", (req, res) => {
    return res.render("login", { error: null });  // No error on fresh load
});

router.post("/auth",authFunc)
module.exports = router;


