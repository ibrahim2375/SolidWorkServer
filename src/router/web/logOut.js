const express = require('express');
const session = require('express-session');
const router = express.Router();
// DELETE /api/auth/logout
router.delete('/', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end()
    }
})

module.exports = router;