const express=require("express");
const Router=express.Router();
const multer = require("multer");
const path = require("path");

const {addInstructor,updateInstructor,deleteInstructor,readInstructor}=require("../controller/instructor");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/instructor');
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, 'eGram' + '-' + Date.now() + path.extname(file.name));
    }
});
const upload = multer({
    storage: storage
})

Router.post('/add',addInstructor);
Router.post('/update',upload.single('picture'),updateInstructor);
Router.post('/delete',deleteInstructor);
Router.get('/read',readInstructor);


module.exports=Router;