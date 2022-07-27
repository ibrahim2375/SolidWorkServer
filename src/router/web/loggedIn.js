const express = require('express');
const session = require('express-session')
const router = express.Router();
router.get('/', (req, res) => {
    if (!req.session.user) {
        res.json({ loggedIn: false, msg: 'You must be logged in' });
    } else {
        // res.json({ loggedIn: true, msg: 'succes', user: req.session.user });
        res.send({ loggedIn: true, msg: 'succes', user: req.session.user })
    }
});

module.exports = router;