const express=require("express");
const { postProperty, getFamily, getBachelor, getOfficeSpace, getAllProperty } = require("../controllers/property.controller");
const router=express.Router();

router.post("/addProperty",postProperty );
router.get("/family", getFamily);
router.get("/bachelor", getBachelor);
router.get("/officespace",getOfficeSpace);
router.get("/viewallproperty",getAllProperty);







module.exports=router;