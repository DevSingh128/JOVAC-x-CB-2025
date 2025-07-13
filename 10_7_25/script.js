/*var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});*/



const fs = require('fs');


//readfile
/*
fs.readFile("math.txt", "utf-8",(err,data)=>{
    if(err){
        console.log("error found in your code : " , err);
    }
    console.log(data);
})*/


//writefile
/*fs.writeFile("app.js","const a = 20",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file is created succesfully");
    }
})*/

//updatefile 
/*fs.appendFile("app.js"," const b = 40;",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file is updated succesfully");
    }
})*/


//delete file
/*fs.unlink("app.js",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file is deleted succesfully");
    }
})*/


//rename
/*fs.rename("math.txt","maths.txt",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("file name changed");
    }
})*/


//create folder
/*fs.mkdir("hef.txt",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("folder created");
    }
})*/


