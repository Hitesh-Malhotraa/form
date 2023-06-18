const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/User').then(()=>{
    console.log('connected');
}).catch((e)=>{
    console.log('error');
})
app.listen('2323',()=>{
    console.log('server listening at port 2323');
})
