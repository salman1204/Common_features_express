const express = require("express")
const router = express.Router()
const {addUser, allUsersInfo, singleUserInfo, deleteUser,updateUserInfo} = require('../controllers/adminUser');

router.post('/add-user',addUser);
router.get('/all-user',allUsersInfo);
router.get('/user/:id',singleUserInfo);
router.delete('/user/:id',deleteUser);
router.put('/user/update/:id',updateUserInfo);


module.exports = router;