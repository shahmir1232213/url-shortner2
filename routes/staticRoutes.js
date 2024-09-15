const express = require("express")
const router = express.Router();
const urlModel = require("../model/schema.model")

router.get("/",async (req,res)=>{
    let allURLS = await urlModel.find() 
        res.render("home",{
            urls : allURLS,
        })
    
}
)

module.exports = router;