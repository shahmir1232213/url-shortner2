const express = require("express")
const app = express()
const connnectMongoose = require("./database/db.connection")
const urlRouter = require("./routes/url.routes")
const path = require("path") 
const staticRouter = require("./routes/staticRoutes")
const userRouter = require("./routes/user.routes")
const cookieParser = require('cookie-parser');
const middleware = require("./middleware/restrictToLoggedInUsers")

const router = express.Router();

connnectMongoose()
//console.log("path: ",__dirname+"/public");
//app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(cookieParser());

app.use(express.static(path.join(__dirname,'public')))

//middleware for requests on /
app.use("/",staticRouter);
//middleware for requests on /url
app.use("/url",middleware.restrictedToLoggedInUsers,urlRouter)
//middleware.restrictedToLoggedInUsers,
//middleware for requests on /user
app.use("/user",userRouter)



app.listen(1000,()=>{
    console.log("Server Started")
})
