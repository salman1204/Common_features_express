const User = require("../models/user")

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
      password: req.body.password,
    })
    try {
      const newUser = await user.save()
      res.json(newUser)
    } catch (err) {
      res.json({ message: err.message })
    }
  }
}
