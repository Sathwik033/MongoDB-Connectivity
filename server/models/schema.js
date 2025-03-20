const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema(
    {
        name:String,
        age:Number,
        isStudent:Boolean
    }
)

const student = mongoose.model('students', studentSchema);
module.exports = student;