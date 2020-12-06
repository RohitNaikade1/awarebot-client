const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    rollNo:{
       type:Number,
       default:101
    },
    Name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    batch:{
        type:[String],
        required:true
    }
},{
    timestamps:true
});
module.exports=mongoose.model('student',studentSchema);