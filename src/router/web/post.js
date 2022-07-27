const express = require('express');
const router = express.Router();
// const db = require('../../models');
const post_controller = require('../../controller/post_controller')
router.get('/:id', post_controller.getSinglePost)
module.exports = router;
