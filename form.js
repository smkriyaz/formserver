const express =require ("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended : true}));

// app.get("/",function(req,res){
//     res.send("Server Reacted");
// })

app.get("/form",function(req,res){
    res.sendFile( __dirname + "/index.html");
})

app.post("/form" ,function(req,res){
    let a =req.body.us1;
    let b = req.body.ps1;
    let c =req.body.em1;
    let d =req.body.ag1;
    let e = req.body.ph1;
    res.send("<ol><li>" +a+"</li> <li>" +b+"</li><li>" +c+"</li><li>" +d+"</li><li>" +e+"</li></ol>");
    console.log(a,b,c,d,e);
})




app.listen(3000,function(){
    console.log("server started");
})