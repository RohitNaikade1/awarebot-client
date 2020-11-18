const express=require("express");
const Router=express.Router();
const {AddRecord}=require("../controller/result");

Router.post('/addRecord',AddRecord);

module.exports=Router;