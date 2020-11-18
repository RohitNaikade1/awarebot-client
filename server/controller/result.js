const Result=require("../schemas/results");
exports.AddRecord=(req,res)=>{
    console.log(req.body);
    const subCodes=req.body.subjectCode;
    const subjects=req.body.Subjects;
    const lowMarks=req.body.lowestMarks;
    const highMarks=req.body.highestMarks;
    const studAppeared=req.body.studentAppeared;
    const studPassed=req.body.studentPassed;
    const pass=req.body.passed;
    const above60=req.body.Above60;
    const data=new Result({
        subCodes,
        subjects,
        lowMarks,
        highMarks,
        studAppeared,
        studPassed,
        pass,
        above60
    });
    data.save((error,data)=>{
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(201).json({
                data: data
            });
        }
    })
}

exports.fetchRecord=()=>{

}