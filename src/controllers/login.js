const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username })

  if (!user) {
    res.status(400).json({
      message: "user not register",
    })
  } else {
    const passwordValidation = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (passwordValidation)
      try {
        jwt.sign(
          { user },
          "secretkey",
          { expiresIn: "86400s" },
          (err, token) => {
            res.send(`Bearer ${token}`)
          }
        )
      } catch (err) {
        res.json(err.message)
      }
    else {
      res.json({ message: "password not matched" })
    }
  }
}
