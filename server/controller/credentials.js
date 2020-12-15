const creds=require("../schemas/credentialsSchema");

exports.addCreds=(req,res)=>{
    const batch=req.body.batch;
    const instructor=req.body.instructor;
    const email=req.body.email;
    const instructorPassword=req.body.instructorPassword;
    const data=new creds({
        batch,
        instructor,
        instructorPassword,
        email
    });
    data.save((error,data)=>{
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(200).json({
                data: "Record Stored successfully!"
            });
        }
    })
}

exports.fetchCreds=(req,res)=>{
    creds.find({})
    .exec((err,response)=>{
        if (response) {
            return res.status(200).json({
                data: response
            })
            if (err) {
                return res.status(500).json({
                    data: err
                })
            }
        }
    })
}

exports.updateInstructorPassword=(req,res)=>{
    const batch=req.body.batch;
    const instructorPassword=req.body.instructorPassword;
    creds.update({batch:batch},{
        $set:{
            instructorPassword:instructorPassword
        }
    },function (error, success) {
        if (error) {
            return res.status(400).json({
                data: error
            })
        } else {
            return res.status(200).json({
                data: "password updated Successfully!"
            })
        }
    })
}

exports.updateInstructor=(req,res)=>{
    const batch=req.body.batch;
    const instructor=req.body.instructor;
    creds.update({batch:batch},{
        $set:{
            instructor:instructor
        }
    },function (error, success) {
        if (error) {
            return res.status(400).json({
                data: error
            })
        } else {
            return res.status(200).json({
                data: "instructor updated Successfully!"
            })
        }
    })
}

exports.deleteBatch=(req,res)=>{
    const batch=req.body.batch;
    creds.deleteOne({batch:batch},function (error, success) {
        if (error) {
            return res.status(400).json({
                data: error
            })
        } else {
            return res.status(200).json({
                data: "Batch deleted Successfully"
            })
        }
    })
}