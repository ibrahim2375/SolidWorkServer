const express = require('express');
const router = express.Router();
const users_controller = require('../../controller/users_controller')
router.post('/', users_controller.getUsers);
module.exports = router;