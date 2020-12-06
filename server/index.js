const express=require('express');
const mongoose=require("mongoose");
const cors=require('cors');
const bodyParser=require('body-parser');
const resultRouter=require("./routes/resultRouter");
const AttendenceRouter=require("./routes/attendenceRouter");
const postRouter=require("./routes/postRouter");
const studentRouter=require("./routes/studentRouter");
const app=express();

app.use(cors());
app.use(express.json());
const port=process.env.port || 5000;

mongoose.connect("mongodb+srv://AwareBot:AwareBot.123@cluster0.na6cy.mongodb.net/AwareBot?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true,
     useFindAndModify: true },()=>{
    console.log("Connected to DB");
});

app.use('/result',resultRouter);
app.use('/attendence',AttendenceRouter);
app.use('/student',studentRouter);
app.use('/post',postRouter);
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log("Server connected successfully on port "+port);
});