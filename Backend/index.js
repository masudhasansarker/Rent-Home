const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz-lts");

//router
 const router=require("./routes/users.route");
 const propertyRouter=require("./routes/property.route");
// Models
const UserRegLogin = require("./model/users");
const FeedBackModel = require("./model/feedbackMessage");
const addPropertyModel = require("./model/addPropertyModel");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use router
app.use(router);
app.use(propertyRouter);

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/RendHome");
    console.log("Database connected...");
  } catch (error) {
    console.error("Database not connected:", error.message);
  }
};

//User Registration
// app.post("/users", async (req, res) => {
//   const { fullName, email, password, confirmPassword } = req.body;
//   try {
//     const resultReg = new UserRegLogin({ fullName, email, password, confirmPassword });
//     const value = await resultReg.save();
//     res.send(value ? "Registration Successful" : "Registration not successful");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// User Login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const data = await UserRegLogin.findOne({ email:email,password:password });
//     res.send(data ? "success" : "Not Successful");
//     //console.log(data);
//   } catch (error) {
//     res.send("User Data is not correct");
//   }
// });

// Post Feedback
// app.post("/feedback", async (req, res) => {
//   const { name, email, message } = req.body;
//   try {
//     const feedbackResult = new FeedBackModel({ name, email, message });
//     const result = await feedbackResult.save();
//     res.send(result ? "Feedback sent Successfully" : "Feedback not sent successfully");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// Add Property
// app.post("/addProperty", async (req, res) => {
//   const { title, description, address, city, price, bedrooms, bathrooms, area, image } = req.body;
//   try {
//     const property = new addPropertyModel({ title, description, address, city, price, bedrooms, bathrooms, area, image });
//     const result = await property.save();
//     res.send(result ? "Property has been successfully stored" : "Property store not successful");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// Get All Properties by Title
// app.get("/family", async (req, res) => {
//   try {
//     const familyProperties = await addPropertyModel.find({ title: "Family House Rent" });
//     res.json(familyProperties);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching Family properties", error: error.message });
//   }
// });

// app.get("/bachelor", async (req, res) => {
//   try {
//     const bachelorProperties = await addPropertyModel.find({ title: "Bachelor Room Rent" });
//     res.json(bachelorProperties);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching Bachelor properties", error: error.message });
//   }
// });

// app.get("/officespace", async (req, res) => {
//   try {
//     const officeSpaceProperties = await addPropertyModel.find({ title: "Office space Rent" });
//     res.json(officeSpaceProperties);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching Office Space properties", error: error.message });
//   }
// });

//view all the property
// app.get("/viewallproperty",async (req,res)=>{
//   try {
//       const allProperties=await addPropertyModel.find();
//       res.json(allProperties);
//   } catch (error) {
//     res.status(500).json({message:"Failed to fetch properties", error: error.message});
//   }
// })

// SSLCommerz Integration
const store_id = "learn6855339aa7252"; // Replace with actual test/live store ID
const store_passwd = "learn6855339aa7252@ssl"; // Replace with actual test/live password
const is_live = false;

app.post("/payment/init", async (req, res) => {
  const { fullName, email, address, contactNumber, price } = req.body;
  const tran_id = `ORDER_${Math.floor(Math.random() * 1000000)}`;

  const data = {
    total_amount: price,
    currency: "BDT",
    tran_id: tran_id,
    success_url: `http://localhost:5173/payment/success/${tran_id}`,
    fail_url: `http://localhost:3000/payment/fail/${tran_id}`,
    cancel_url: `http://localhost:3000/payment/cancel/${tran_id}`,
    ipn_url: `http://localhost:3000/payment/ipn`,
    shipping_method: "NO",
    product_name: "Property Booking",
    product_category: "Rental",
    product_profile: "general",
    cus_name: fullName,
    cus_email: email,
    cus_add1: address,
    cus_phone: contactNumber,
    shipping_address: address,
  };

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);
    return res.send({ redirectURL: apiResponse.GatewayPageURL });
  } catch (error) {
    console.error("SSLCommerz error:", error);
    return res.status(500).send({ error: "Failed to initiate SSLCommerz payment" });
  }
});

// Root Endpoint
app.get("/", (req, res) => {
  res.send("New Database created and running.");
});

// Start Server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
