const db = require('../../models');
const bcrypt = require('bcrypt');
const session = require('express-session')
const methods = {
    async getUsers(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            if (email === '' || password === '') {
                res.send('email or password cannot be empty');
            } else if (password.length < 6) {
                res.send('password cannot be less than 6 characters');
            } else {
                const getUser = await db.User.findOne({ where: { email: email } });
                if (getUser) {
                    bcrypt.compare(password, getUser.password, (err, user) => {
                        if (err) {
                            res.send(err);
                        } else {
                            if (!user) {
                                res.send('not a valid password');
                            } else {
                                req.session.user = getUser;
                                res.send('valid user');
                            }
                        }

                    })
                } else {
                    res.send('not a valid email');
                }

            }

            if (!getUser) {
                return res.send('please write correct user');
            }
            res.status(200).send('success');

        } catch (err) {
            console.log(err);
        }
    }

}
module.exports = { ...methods };