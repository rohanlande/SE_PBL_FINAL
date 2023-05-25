const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
    console.log("connecction is succesfull")
})   
.catch((e)=>{
    console.log(e);
})






// const mongoose = require("mongoose");



// mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
//     console.log("connecction is succesfull")
// })   
// .catch((e)=>{
//     console.log(e);
// })
//atlas part not req
// const mongoose =require('mongoose');
// const express= require(express);
// const app=express();
// const DB ='mongodb+srv://rohanlande:<rohan1234>@cluster0.tfjhm74.mongodb.net/mernstack?retryWrites=true&w=majority'
// mongoose.connect(DB, {
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false

// }).then(()=>{
//         console.log('connection is succesfulll');
// }).catch((err)=>console.log('no (new update)'));
//end atlas part