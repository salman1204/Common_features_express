const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.send("Error" + err)
  }
})

module.exports = router
