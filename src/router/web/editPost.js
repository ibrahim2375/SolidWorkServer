const db = require('../../../models')
const express = require('express');
const session = require('express-session')
const router = express.Router();
router.get('/:id', async (req, res) => {
    if (req.session.user) {
    const mypost = await db.Posts.findOne({ where: { id: req.params.id } });
    if (mypost) {
        res.send(mypost);
    } else {
        res.send('no posts');
    }
    } else {
        res.send("no user");
    }

});

module.exports = router;