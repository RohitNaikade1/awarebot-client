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
    }
},{
    timestamps:true
});
module.exports=mongoose.model('posters',posterSchema);