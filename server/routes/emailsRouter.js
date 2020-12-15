const express=require("express");
const Router=express.Router();
const {addEmail,addBatch,fetchEmails,deleteEmail,deleteBatch}=require("../controller/emails");

Router.post('/addBatch',addBatch);

Router.post('/addEmail',addEmail);

Router.post('/deleteBatch',deleteBatch)

Router.post('/deleteEmail',deleteEmail)

Router.get('/fetch',fetchEmails)

module.exports=Router;