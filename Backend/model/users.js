const mongoose=require("mongoose")

const userRegisterSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    }
})

const UserRegLogin=new mongoose.model("register",userRegisterSchema);

module.exports=UserRegLogin;