// All CRUD operations of Users [ADD,EDIT,DELETE,READ] from Admin Panel

const User = require("../models/user")

// add new user
exports.addUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  try {
    const addedUser = await user.save()
    res.json(addedUser)
  } catch (err) {
    res.send("Error" + err)
  }
}

// show all users 
exports.allUsersInfo = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.send("Error" + err)
  }
}

// show specific user info 
exports.singleUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send("Error" + err)
  }
}

// Update Specific user
exports.updateUserInfo = async(req,res) => {
    const userId = req.params.id;
    try {
        await User.findByIdAndUpdate(
            userId,
            {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            }
        )
        res.send("Updated")
    }
    catch(err) {
        res.send("Error" + err)
    }
} 

// delete specific user 
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.send("delete")
  } catch (err) {
    res.send("Error" + err)
  }
}
