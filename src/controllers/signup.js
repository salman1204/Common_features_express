const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.signUp = async (req, res) => {
  const registeredUser = await User.findOne({ username: req.body.username })
  if (registeredUser) {
    res.json({
      message: "Username already exist",
    })
  } else {
    let user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    try {
      const newUser = await user.save()
      res.json(newUser)
    } catch (err) {
      res.json({ message: err.message })
    }
  }
}
