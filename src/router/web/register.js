const express = require('express');
const router = express.Router();
const register_controller = require('../../controller/register_controller')
router.post('/', register_controller.setUser);
module.exports = router;