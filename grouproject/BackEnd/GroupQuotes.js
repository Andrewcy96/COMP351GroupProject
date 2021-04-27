const http = require('http');
const { constants } = require('buffer');
const GET = 'GET';
const PUT = 'PUT';
const OPTIONS = 'OPTIONS';
const POST = 'POST';
const DELETE = 'DELETE';
const urlParser = require('url');
const mysql = require("mysql");
const { runInNewContext } = require('vm');
const express = require("express");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "andrewc1_bronze",
    password: "Andrewy1.",
    database: "andrewc1_Bronze"
});


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://andrewcyeung.website/BronzeServer/API/V1/Quotes");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization, Content-Length, X-Request-Width");
    next();
});


app.post("/BronzeServer/API/V1/Quotes/", (req, res) => {

    console.log("request is  = ");

    let body = "";

   req.on('data', function (chunk){
       console.log("chunk is "+ JSON.stringify(chunk));
       if(chunk !== null){
           body += chunk;
           console.log("body is =")
           console.log(JSON.stringify(body));

       }
   })
   
var message = 'Added to database! \n',
   version = 'NodeJS ' + process.versions.node + '\n',
   response = [message, version].join('\n');
   
   req.on('end', function(){
       let parsedBody = JSON.parse(body);
       console.log("body is = "+ JSON.parse(body));
   
       let index = parsedBody.id;
       let quote = parsedBody.body;
           console.log("parsed id is = " + parsedBody.id);
            console.log("parsed body is = " + parsedBody.body);
           let postCounter = parsedBody.POSTCounter;  
           let putCounter = parsedBody.PUTCounter;  
           let deleteCounter = parsedBody.DELETECounter;  
           let getCounter = parsedBody.GETCounter;  
           
   
       
    db.query("REPLACE INTO FamousQuotes values ("+ index + ','+ quote + ')', function (err,result){
           if(err) throw err;
            console.log("1 record inserted");
       })
            db.query("REPLACE INTO Counter values ("+ postCounter + ','+putCounter+','+deleteCounter+','+ getCounter+ ')', function (err,result){
        if(err) throw err;
         console.log("1 record inserted");
    })
   })


   console.log("inside post")
})
app.post("/BronzeServer/API/V1/Quotes/1", (req, res) => {

    console.log("request is  = ");

    let body = "";

   req.on('data', function (chunk){
       console.log("chunk is "+ JSON.stringify(chunk));
       if(chunk !== null){
           body += chunk;
           console.log("body is =")
           console.log(JSON.stringify(body));

       }
   })
   
var message = 'Added to database! \n',
   version = 'NodeJS ' + process.versions.node + '\n',
   response = [message, version].join('\n');
   
   req.on('end', function(){
       let parsedBody = JSON.parse(body);
       console.log("body is = "+ JSON.parse(body));
   
           let postCounter = parsedBody.POSTCounter;  
           let putCounter = parsedBody.PUTCounter;  
           let deleteCounter = parsedBody.DELETECounter;  
           let getCounter = parsedBody.GETCounter;  
           

            db.query("REPLACE INTO Counter values ("+ postCounter + ','+putCounter+','+deleteCounter+','+ getCounter+ ')', function (err,result){
        if(err) throw err;
         console.log("1 record inserted");
    })
   })


   console.log("inside post")
})

app.delete("/BronzeServer/API/V1/Quotes/", (req, res) => {
    
    console.log("request is  = ");

    let body = "";

   req.on('data', function (chunk){
       console.log("chunk is "+ JSON.stringify(chunk));
       if(chunk !== null){
           body += chunk;
           console.log("body is =")
           console.log(JSON.stringify(body));

       }
   })
   
var message1 = 'deleted from database! \n',
   version1 = 'NodeJS ' + process.versions.node + '\n',
   response1 = [message1, version1].join('\n');
   
   req.on('end', function()
   {
       let parsedBody = JSON.parse(body);
       console.log("body is = "+ JSON.parse(body));
   
       let index = parsedBody.id;
       let quote = parsedBody.body;
           console.log("parsed id is = " + parsedBody.id);
            console.log("parsed body is = " + parsedBody.body);
            let postCounter = parsedBody.POSTCounter;  
           let putCounter = parsedBody.PUTCounter;  
           let deleteCounter = parsedBody.DELETECounter;  
           let getCounter = parsedBody.GETCounter;  
   
       
    db.query("DELETE FROM FamousQuotes WHERE ( ID = "+ index + ')', function (err,result){
           if(err) throw err;
            console.log("1 record deleted");
       })
             db.query("REPLACE INTO Counter values ("+ postCounter + ','+putCounter+','+deleteCounter+','+ getCounter+ ')', function (err,result){
        if(err) throw err;
         console.log("1 record inserted");
    })

   })
   console.log("inside delete")
})

app.get("/BronzeServer/API/V1/Quotes/", (req,res)=>{

        console.log("inside get");
    
        db.query("SELECT * FROM FamousQuotes", function (err, result) {
            if (err) throw err;
           res.send(result);
        })               
    })
    app.get("/BronzeServer/API/V1/Quotes/1", (req,res)=>{

        console.log("inside postget");
    
        db.query("SELECT SUM(PostCounter) from Counter", function (err, result) {
            if (err) throw err;
           res.send(result);
        })    
        
    })
    app.get("/BronzeServer/API/V1/Quotes/2", (req,res)=>{

        console.log("inside putget");
    
        db.query("SELECT SUM(PutCounter) from Counter", function (err, result) {
            if (err) throw err;
           res.send(result);
        })               
    })
    app.get("/BronzeServer/API/V1/Quotes/3", (req,res)=>{

        console.log("inside deleteget");
    
        db.query("SELECT SUM(DeleteCounter) from Counter", function (err, result) {
            if (err) throw err;
           res.send(result);
        })               
    })
    app.get("/BronzeServer/API/V1/Quotes/4", (req,res)=>{

        console.log("inside getget");
    
        db.query("SELECT SUM(GetCounter) from Counter", function (err, result) {
            if (err) throw err;
           res.send(result);
        })               
    })

app.put("/BronzeServer/API/V1/Quotes/",(req,res)=>{
    console.log("request is  = ");

    let body = "";

   req.on('data', function (chunk){
       console.log("chunk is "+ JSON.stringify(chunk));
       if(chunk !== null){
           body += chunk;
           console.log("body is =")
           console.log(JSON.stringify(body));

       }
   })
   
var message = 'Added to database! \n',
   version = 'NodeJS ' + process.versions.node + '\n',
   response = [message, version].join('\n');
   
   req.on('end', function(){
       let parsedBody = JSON.parse(body);
       console.log("body is = "+ JSON.parse(body));
   
       let index = parsedBody.id;
       let quote = parsedBody.body;
           console.log("parsed id is = " + parsedBody.id);
            console.log("parsed body is = " + parsedBody.body);
            let postCounter = parsedBody.POSTCounter;  
           let putCounter = parsedBody.PUTCounter;  
           let deleteCounter = parsedBody.DELETECounter;  
           let getCounter = parsedBody.GETCounter;  
   
       
    db.query("REPLACE INTO FamousQuotes values ("+ index + ','+ quote + ')', function (err,result){
           if(err) throw err;
            console.log("1 record inserted");
       })
             db.query("REPLACE INTO Counter values ("+ postCounter + ','+putCounter+','+deleteCounter+','+ getCounter+ ')', function (err,result){
        if(err) throw err;
         console.log("1 record inserted");
    })
   })


   console.log("inside put")
})

app.listen();