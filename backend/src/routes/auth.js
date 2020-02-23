const router = require("express").Router();
const User = require("../model/User"); //mongodb user model
const { registerValidation, loginValidation } = require("../validation"); //input validation
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register a new user
router.post("/register", async (req, res) => {
  //input validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error);

  //check if user already exists
  if (await User.findOne({ email: req.body.email }))
    return res.status(400).send("Email already exists");

  //password hashing
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //filling user schema with data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });

  try {
    //adding a new user to db
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//User login
router.post("/login", async (req, res) => {
  //input validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error);

  //check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid email or password");

  //assigning a user by its unique id
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
