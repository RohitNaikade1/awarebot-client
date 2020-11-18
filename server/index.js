const express=require('express');
const mongoose=require("mongoose");
const resultRouter=require("./routes/resultRouter");
const app=express();

const port=process.env.port || 5000;
mongoose.connect("mongodb+srv://AwareBot:AwareBot.123@cluster0.na6cy.mongodb.net/AwareBot?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true,
     useFindAndModify: true },()=>{
    console.log("Connected to DB");
});
app.use('/result',resultRouter);
app.listen(port,()=>{
    console.log("Server connected successfully on port "+port);
});