const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
const router=require('./routes/route.js')

dotenv.config();

// middlewares
app.use(express.json())

const portt=process.env.port;

mongoose.connect(process.env.mongourl)
.then(()=>{
    console.log('Database is connected')
})
.catch((err)=>{
    console.log(err)
})

app.use('/',router)

app.listen(3000,()=>{
    console.log('Server is listening')
})
