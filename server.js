
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const sql = require ("./db.js");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message: "hello"});
});

app.listen(3060, ()=>{
    console.log("server is running on port 3060")
})



app.get("/ANIMALS", function(req, res){
    sql.query("SELECT * FROM ANIMALS", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all ANIMALS: " + err});
    return;
    }
    console.log("got all customers...");
    res.send(mysqlres);
    return;
    });
    });
    app.get('path', function(req,res){
         res.send('');
    });
