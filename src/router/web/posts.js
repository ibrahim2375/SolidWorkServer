const express = require('express');
const router = express.Router();
const posts_controller = require('../../controller/posts_controller')
router.get('/', posts_controller.getPosts);

module.exports = router;
