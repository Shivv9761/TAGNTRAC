const express= require("express");
const app=express();


const cookieParser = require("cookie-parser");
const cors= require("cors");
const database = require("./config/database")

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000 

database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

app.get("/", (req,res)=>{
    return res.json({
        succeess:true,
        message:"your server is up and running"
    })
})


app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`)
})