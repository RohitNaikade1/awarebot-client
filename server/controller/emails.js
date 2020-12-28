const Emails=require("../schemas/emailsSchema");
const _ = require('lodash');

exports.addBatch=(req,res)=>{
    const ibatch=req.body.batch;
    const batch=ibatch.toLowerCase();
    const emails=req.body.emails;
    const studentPassword=req.body.password;
    console.log("reached")
    const data=new Emails({
        batch,
        emails,
        studentPassword
    });
    data.save((error,data)=>{
        if (error) {
            console.log(error)
            return res.status(400).json({
                error: error
            });
        }
        if (data) {
            return res.status(200).json({
                message: "Batch Added Successfully!"
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
    const ibatch=req.body.batch;
    const batch=ibatch.toLowerCase();
    const studentPassword=req.body.studentPassword;
    Emails.findOne({ batch: batch }, function (error, user) {
        if (!user) {
            return res.status(400).json({
                error: "Batch does not exists!"
            });
        } else {
            const updatedFields = {
                studentPassword: studentPassword
            }
            user = _.extend(user, updatedFields);

            user.save((err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({
                        error: 'Error resetting user password'
                    });
                }else{
                    return res.status(200).json({
                        message: 'Student password updated successfully!'
                    });
                }
            });
        }
    })
}

exports.addEmail=(req,res)=>{
    const ibatch=req.body.batch;
    const batch=ibatch.toLowerCase();
    const email=req.body.email;
    Emails.findOne({ batch: batch }, function (error, user) {
        if (!user) {
            return res.status(400).json({
                error: "Batch does not exists!"
            });
        } else {
            Emails.updateOne({batch:batch},{
                $push:{
                    emails:email
                }
            },function (error, success) {
                if (error) {
                    return res.status(400).json({
                        error: "error while updating email database"
                    })
                } else {
                    return res.status(200).json({
                        message: "Emails updated successfully!"
                    })
                }
            })
        }
    })

    
}

exports.deleteEmail=(req,res)=>{
    const ibatch=req.body.batch;
    const batch=ibatch.toLowerCase();
    const email=req.body.email;
    Emails.findOne({ batch: batch }, function (error, user) {
        if (!user) {
            return res.status(400).json({
                error: "Batch does not exists!"
            });
        } else {
            Emails.updateOne({batch:batch},{
                $pull:{
                    emails:email
                }
            },function (error, success) {
                if (error) {
                    return res.status(400).json({
                        error: "error while deleting email database"
                    })
                } else {
                    return res.status(200).json({
                        message: "Email deleted successfully!"
                    })
                }
            })
        }
    })
}

exports.deleteBatch=(req,res)=>{
    const ibatch=req.body.batch;
    const batch=ibatch.toLowerCase();
    Emails.deleteOne({batch:batch},function (error, success) {
        if (error) {
            return res.status(400).json({
                error: "error while deleting batch"
            })
        } else {
            return res.status(200).json({
                message: "Batch deleted Successfully"
            })
        }
    })
}