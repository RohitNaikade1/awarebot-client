const Attendence=require("../schemas/attendenceSchema");

exports.AddRecord=(req,res)=>{
    // console.log(req.body);
    const ID=req.body.ID;
    const month=req.body.month;
    const JavaCount=req.body.JavaCount;
    const CPPCount=req.body.CPPCount;
    const DSCount=req.body.DSCount;
    const data=new Attendence({
        ID,
        month,
        JavaCount,
        CPPCount,
        DSCount
    });
    console.log(data)
    // Attendence.insertMany(data,(err,data)=>{
    //     return res.status(200).json({
    //         msg:"success"
    //     })
    // })
    data.save((error,data)=>{
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(200).json({
                data: "stored SuccessFully"
            });
        }
    })
}

exports.fetchRecord=(req,res)=>{
    Attendence.find({})
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