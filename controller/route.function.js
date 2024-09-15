const short_unique_id = require("short-unique-id")
const urlModel = require("../model/schema.model")

async function chechPrev(url){
    let decision = await urlModel.findOne({redirectURL:url})
    if(decision === null)return false
    else{
        return decision.shortID;
    }
}

async function getID(req,res){
    let checkLink = req.body.url;
    let decision = null;
    await chechPrev(checkLink).then((res)=>{
        decision = res;
    })
    
    if( decision === false){
        let uid = new short_unique_id({length:10})
        shortID = uid.rnd()
        console.log(req.body.url);
        try{
            ///console.log("Req Params: ",req.params)
            let newUrl = await urlModel.create({
                shortID : shortID,
                redirectURL : req.body.url
            })
            console.log(newUrl); 
            let allURLS = await urlModel.find()
            return res.status(201).render("home",{
                        shortID:shortID,
                        urls : allURLS,
                    }
            );
        }
        catch(err){
            console.log(err)
            return res.status(400).send(err);
        }
    }
    let allURLS = await urlModel.find()
    return res.status(201).render("home",{
                    shortID:decision,
                    urls : allURLS,
                }
            )
}

async function redirectURL(req,res) {
    console.log("Req Params: ",req.params)
    let shortID = req.params.shortID;
    let findURL = await urlModel.findOne({shortID:shortID}) 
    await urlModel.updateOne({shortID:shortID},{$inc:{click : 1}})
   // await findURL.save()
   console.log("Find Url: ",findURL.redirectURL)
    res.redirect(findURL.redirectURL)
}
module.exports = {getID,redirectURL};