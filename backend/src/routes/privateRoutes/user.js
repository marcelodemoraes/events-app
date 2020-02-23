const router = require("express").Router();
const verify = require("../verifyToken");
const User = require("../../model/User");

//Get user information: name and email
router.get("/", verify, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) return res.send("Nope");
  res.json({
    name: user.name,
    email: user.email
  });
});

module.exports = router;
