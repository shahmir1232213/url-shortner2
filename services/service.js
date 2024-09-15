

/*StateFul Authentication

const sessionIdToTokenMap = new Map()
var value = null;
function setToken(id,Token){
    sessionIdToTokenMap.set(id,Token)
}

function getToken(id){
    return sessionIdToTokenMap.get(id);
}
*/

//Stateless Authentication
const jwt = require("jsonwebtoken")
const secretKey = "QWEshahmir@1";

function setToken(finduser){
    const payload = {
        email:finduser.email,
        name:finduser.middleName
    }
    token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

   return token;
}

function getToken(token){
    const decode = jwt.verify(token,secretKey);
    return decode;
}

module.exports = {
    setToken,
    getToken
}