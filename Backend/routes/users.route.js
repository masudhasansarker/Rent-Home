const express=require("express");
const { getUserReg, getLogin } = require("../controllers/users.controller");
const { postFeedback } = require("../controllers/userFeedback.controller");
const router=express.Router();

router.post("/users",getUserReg);
router.post("/login", getLogin);
router.post("/feedback", postFeedback);



module.exports=router;