const Result=require("../schemas/resultSchema");

exports.AddRecord=(req,res)=>{
    // console.log(req.body);
    const ID=req.body.ID;
    const month=req.body.month;
    const JavaCount=req.body.JavaCount;
    const CPPCount=req.body.CPPCount;
    const DSCount=req.body.DSCount;
    const data=new Result({
        ID,
        month,
        JavaCount,
        CPPCount,
        DSCount
    });
    console.log(data)
    // Result.insertMany(data,(err,data)=>{
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
                data: data
            });
        }
    })
}

exports.fetchRecord=(req,res)=>{
    Result.find({})
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