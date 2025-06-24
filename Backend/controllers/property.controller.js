const addPropertyModel = require("../model/addPropertyModel");

exports.postProperty=async (req, res) => {
  const { title, description, address, city, price, bedrooms, bathrooms, area, image } = req.body;
  try {
    const property = new addPropertyModel({ title, description, address, city, price, bedrooms, bathrooms, area, image });
    const result = await property.save();
    res.send(result ? "Property has been successfully stored" : "Property store not successful");
  } catch (error) {
    res.send(error.message);
  }
}

//get family house rent

exports .getFamily=async (req, res) => {
  try {
    const familyProperties = await addPropertyModel.find({ title: "Family House Rent" });
    res.json(familyProperties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Family properties", error: error.message });
  }
}
//get Bachelor house rent

exports.getBachelor=async (req, res) => {
  try {
    const bachelorProperties = await addPropertyModel.find({ title: "Bachelor Room Rent" });
    res.json(bachelorProperties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Bachelor properties", error: error.message });
  }
}
//get Office space rent

exports.getOfficeSpace= async (req, res) => {
  try {
    const officeSpaceProperties = await addPropertyModel.find({ title: "Office space Rent" });
    res.json(officeSpaceProperties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Office Space properties", error: error.message });
  }
}

//get home all the property show
exports.getAllProperty=async (req,res)=>{
  try {
      const allProperties=await addPropertyModel.find();
      res.json(allProperties);
  } catch (error) {
    res.status(500).json({message:"Failed to fetch properties", error: error.message});
  }
}