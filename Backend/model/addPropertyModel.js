const mongoose =require("mongoose");

const addPropertySchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
      description:{
        type:String,
        require:true
      },
      address:{
        type:String,
        require:true
      },
      city:{
        type:String,
        require:true
      },
      price:{
        type:String,
        require:true
      },
      bedrooms:{
        type:String,
        require:true
      },
      bathrooms:{
        type:String,
        require:true
      },
      area:{
        type:String,
        require:true
      },
      image:{
        type:String,
        require:true
      },
})

const addPropertyModel=mongoose.model("PropertyList",addPropertySchema);

module.exports=addPropertyModel;