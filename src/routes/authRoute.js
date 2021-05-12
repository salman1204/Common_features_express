const express = require("express")
const router = express.Router()
const { signUp } = require("../controllers/signup")

router.post('/signup', signUp);
router.post('/login', signUp);


module.exports = router
