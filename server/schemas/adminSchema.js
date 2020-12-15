const mongoose=require("mongoose");
const bcrypt=require('bcrypt');
const adminSchema=new mongoose.Schema({
    email:{
       type:String
    },
    hash_password:{
        type:String
    }
},{
    timestamps:true
});

adminSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
});

adminSchema.methods.comparePassword=function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
module.exports=mongoose.model('admin',adminSchema);