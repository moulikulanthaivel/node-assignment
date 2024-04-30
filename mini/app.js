import express from "express"
import dotenv from "dotenv"
import apiRouter from "./routes/apiRouter.js"

dotenv.config({"path":"./setting/config.env"})
let port=process.env.PORT
let host=process.env.HOST

const app = express()

app.get("/",(req,resp)=>{
    resp.end("hello welcome to our page")
})

app.use("/api",apiRouter)

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running : http://${host}:${port}`);
})

