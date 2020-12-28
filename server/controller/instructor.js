const Instructor = require("../schemas/instructorSchema");
const _ = require('lodash');
const path = require('path');

exports.addInstructor = (req, res) => {
    const name=req.body.name;
    const batch=req.body.batch;
    const education=req.body.education;
    const email = req.body.email;
    const instagram=req.body.instagram;
    const github=req.body.github;
    const facebook=req.body.facebook;
    const picture= `http://localhost:5000/instructor/${req.files.picture.name}`

    const file=req.files.picture;
   file.mv(path.join(__dirname, 'images/instructor', file.name), (err) => {
    if (err){
    }else{

        }
});
    Instructor.findOne({ batch: batch }, function (error, data) {
        if (data) {
            return res.status(400).json({
                error: "Batch already exists!"
            });
        } else {
            const data = new Instructor({
                name,
                batch,
                education,
                instagram,github,
                facebook,
                email,
                picture
            });
            data.save((error, data) => {
                    if(error){
                        return res.status(400).json({
                            error: "error while adding an instructor"
                        });
                    }else{
                        return res.status(200).json({
                            message: "instructor added successfully!"
                        });
                    }
            })
        }
    })
}

exports.updateInstructor = (req, res) => {
    const name=req.body.name;
    const batch=req.body.batch;
    const education=req.body.education;
    const email = req.body.email;
    const instagram=req.body.instagram;
    const github=req.body.github;
    const facebook=req.body.facebook;
    const picture= `http://localhost:5000/instructor/${req.file.filename}`
    Instructor.findOne({ batch: batch }, function (error, user) {
        if (!user) {
            return res.status(400).json({
                error: "Batch does not not exist!"
            });
        } else {
            const updatedFields = {
                name:name,
                education:education,
                email:email,
                instagram:instagram,
                github:github,
                facebook:facebook,
                picture:picture
            }
            user = _.extend(user, updatedFields);

            user.save((err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({
                        error: 'Error while updating instructor details'
                    });
                }
                res.json({
                    message: `Instructor updated successfully! `
                });
            });
        }
    })

}

exports.deleteInstructor = (req, res) => {
    Instructor.countDocuments((err,noOfDocs)=>{
        if(noOfDocs>3){
             const batch=req.body.batch;
             Instructor.deleteOne({batch:batch},(err,success)=>{
                 if(err){
                    return res.status(400).json({
                        error: 'Error while deleting an instructor'
                    });
                 }else{
                    return res.status(400).json({
                        error: 'Instructor deleted successfully'
                    });
                 }
             });
        }else{
            return res.status(400).json({
                error:"Only one record is remaining.deletion not allowed"
            });
        }
    })
}


exports.readInstructor = (req, res) => {
   Instructor.find({})
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