const db = require('../../models');
const bcrypt = require('bcrypt');
const methods = {
    async setUser(req, res) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            if (name === '' || email === '' || password === '') {
                res.send('name or email or password is required');
            } else if (password.length < 6) {
                res.send('password cant be less than 6 characters');
            }
            else {
                const getUser = await db.User.findOne({ where: { email: email } });
                if (getUser) {
                    res.send('this user already exists');
                } else {
                    bcrypt.hash(password, 10, async (err, hash) => {
                        if (err) {
                            res.send(err);
                        }
                        const createUser = await db.User.create({ name: name, email: email, password: hash });
                        if (!createUser) {
                            res.send('some Wrong happened please try again');
                        }
                    })
                    res.send(200);
                }
            }



        } catch (err) {
            console.log(err);
        }
    }

}
module.exports = { ...methods };