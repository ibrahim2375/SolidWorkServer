const express = require('express');
const router = express.Router();
const  myPosts_controller = require('../../controller/myPosts_controller')
router.get('/', myPosts_controller.getMyPosts);
module.exports = router;