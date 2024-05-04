import express, { urlencoded } from "express"
import dotenv from "dotenv"
import apiRouter from "./Routes/apiRouter.js"



dotenv.config({"path":"./setting/config.env"})
let port=process.env.PORT
let host=process.env.HOST

const app = express()
app.use(express.json());
app.use(urlencoded({extended:true}));

app.get("/",(req,resp)=>{
    resp.send("hello")
})

app.use("/api",apiRouter)

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log (`server running : http://${host}:${port}`);
})