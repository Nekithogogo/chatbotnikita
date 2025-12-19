const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/message', chatController.handleMessage); // POST /api/chat/message

module.exports = router;