const mongoose=require("mongoose");

const posterSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    filename:{
        type:String
    }
},{
    timestamps:true
});
module.exports=mongoose.model('posters',posterSchema);