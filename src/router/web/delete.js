const db = require('../../../models')
const express = require('express');
const session = require('express-session')
const router = express.Router();
router.delete('/:id', async (req, res) => {
    if (req.session.user) {
        await db.Posts.destroy({ where: { id: req.params.id } }).then(function (result) {
            res.send('deleted successfully');
        }).catch(function (err) {
            res.send(err.message);
        });
    } else {
        res.send("no user");
    }

});

module.exports = router;