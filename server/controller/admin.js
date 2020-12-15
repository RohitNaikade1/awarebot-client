const Admin=require("../schemas/adminSchema");

exports.addAdmin=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const data=new Admin({
       email,
       password
    });
    data.save((error,data)=>{
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(200).json({
                data: data
            });
        }
    })
}

exports.updateAdmin=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    Admin.updateOne({email:email},{
        $set:{
            password:password
        }
    },function(error,data){
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(200).json({
                data: "password updated successfully!"
            });
        }
    })
}