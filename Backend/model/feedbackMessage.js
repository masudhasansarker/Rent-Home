const mongoose=require("mongoose");

const FeedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

const FeedBackModel=new mongoose.model("feedback_Cus",FeedbackSchema);
module.exports=FeedBackModel;