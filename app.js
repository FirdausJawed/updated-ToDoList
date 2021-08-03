const express = require("express");
const bodyParser = require("body-parser");
const app = express();

 let additem =["wake up early","take a bath","homeworks"
];
let workitems= [];


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req, res){

  let today = new Date();

 let options = {
   weekday : "long",
   day : "numeric",
   month : "long",
   year : "numeric"
 }

 let day = today.toLocaleString("en-US",options)

 res.render("list",{listitle : day,
   product : additem})
});

app.get("/work",function(req, res){

res.render("list",{listitle : "worklist",
  product : workitems})

})


app.post("/",function(req, res){
 let item = req.body.input;
 console.log(item);
 additem.push(item);

 res.redirect("/");
});

app.post("/work",function(req,res){
 let item =req.body.input;
 workitems.push(item);
  res.redirect("/work")
})

app.listen(3000,function(){
  console.log("its running");
})
