const express=require("express");
var app=express();
var cors=require("cors")
const bodyParser= require("body-parser");
var urlencodedparser=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())
app.use(cors())
var data=[];
app.get("/",(req,res)=>{
    res.send("happy to get u")
})

app.post("/registered",(req,res)=>{
    res.send(req.body)
    data.push(req.body)
    console.log(req.body);
    console.log(data)
    //res.status(200).send({"message":"data received"})
})

app.listen(3000)