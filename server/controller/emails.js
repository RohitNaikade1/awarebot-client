const Emails=require("../schemas/emailsSchema");

exports.addBatch=(req,res)=>{
    // console.log(req.body);
    const batch=req.body.batch;
    const emails=req.body.emails;
    const studentPassword=req.body.studentPassword;
    const data=new Emails({
        batch,
        emails,
        studentPassword
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

exports.fetchEmails=(req,res)=>{
    Emails.find({})
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

exports.updateStudentPassword=(req,res)=>{
    const batch=req.body.batch;
    const studentPassword=req.body.studentPassword;
    Emails.update({batch:batch},{
        $set:{
            studentPassword:studentPassword
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

exports.addEmail=(req,res)=>{
    const batch=req.body.batch;
    const emails=req.body.emails;
    Emails.update({batch:batch},{
        $push:{
            emails:emails
        }
    },function (error, success) {
        if (error) {
            return res.status(400).json({
                data: error
            })
        } else {
            return res.status(200).json({
                data: "Emails updated successfully!"
            })
        }
    })
}

exports.deleteEmail=(req,res)=>{
    const batch=req.body.batch;
    const emails=req.body.emails;
    Emails.update({batch:batch},{
        $pull:{
            emails:emails
        }
    },function (error, success) {
        if (error) {
            return res.status(400).json({
                data: error
            })
        } else {
            return res.status(200).json({
                data: "Email deleted Successfully!"
            })
        }
    })
}

exports.deleteBatch=(req,res)=>{
    const batch=req.body.batch;
    Emails.deleteOne({batch:batch},function (error, success) {
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