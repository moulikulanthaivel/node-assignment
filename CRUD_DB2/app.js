import express from "express";
import apiRouter from "./Route/apiRouter.js"
import mongoose from "mongoose";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,resp)=>{
    resp.send("welcome root")
})

app.use("/api",apiRouter)

mongoose.connect("mongodb://localhost:27017/hello")
.then(()=>{console.log("sucessfully");})
.catch(()=>{console.log("failed");})


app.listen("7070","127.0.0.1",(err)=>{
    if(err) throw err
    console.log(`server : http://127.0.0.1:7070`);
})