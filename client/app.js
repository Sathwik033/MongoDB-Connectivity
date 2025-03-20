const student = require('./models/schema.js')
const mongoose=require('mongoose')
require('./server.js')

new student({
    name:'Sathwik Goud',
    age:19,
    isStudent:true
}).save().then(()=>{
    console.log('Data Saved')
}).catch((err)=>{
    console.log(err)
})
