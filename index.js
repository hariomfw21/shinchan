const express = require("express")

const app = express();


app.get("/data",(req,res)=>{
    res.send("data");
})

app.listen(4600,()=>{
    console.log("connected");
})
