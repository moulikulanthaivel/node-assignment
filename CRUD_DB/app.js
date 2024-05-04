import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import appRouter from "./Route/AppRouter.js"

dotenv.config({"path": "./setting/config.env"})
let port = process.env.PORT
let host = process.env.HOST
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,resp)=>{
    resp.send("HELLO ROOT")
})

app.use("/api",appRouter)

mongoose.connect("mongodb://localhost:27017/Drain")
.then(()=>{console.log ("server connected successfully")})
.catch(()=>{console.log("server connected failed");})



app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running Successfully : http://${host}:${port}`);
})