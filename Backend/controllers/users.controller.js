const UserRegLogin = require("../model/users");

//registration post login controller
exports.getUserReg=async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  try {
    const resultReg = new UserRegLogin({ fullName, email, password, confirmPassword });
    const value = await resultReg.save();
    res.send(value ? "Registration Successful" : "Registration not successful");
  } catch (error) {
    res.send(error.message);
  }
}
//login Logic controller
exports.getLogin=async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await UserRegLogin.findOne({ email:email,password:password });
    res.send(data ? "success" : "Not Successful");
    //console.log(data);
  } catch (error) {
    res.send("User Data is not correct");
  }
}