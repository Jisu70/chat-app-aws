// Dependencies
const express = require('express');
const router = express.Router();

// Controller
const { addMsg, getPrevChat, uploadFile } = require('../controllers/chats');

// Middlewares
const authorization = require('../middlewares/auth');
const fileupload = require('../middlewares/fileupload');

// Router instance
router.post('/chat', authorization, addMsg);
router.get('/chat/:groupId', authorization, getPrevChat);
router.post('/upload/:groupId', fileupload, authorization, uploadFile);

// Exporting the module
module.exports = router;
