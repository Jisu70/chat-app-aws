// Dependencies
const express = require('express');
const router  = express.Router();
// Controller
const {signUp,login,getAllUsers} = require('../controllers/users')

// Router instance
router.post('/users/signup', signUp )
router.post('/users/login', login)
router.get('/users/getAllUsers', getAllUsers)

// Expoting the module
module.exports = router;