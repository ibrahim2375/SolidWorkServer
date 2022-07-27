const db = require('../../models');
const session = require('express-session')
const methods = {
    async getMyPosts(req, res) {
        try {
            if (req.session.user) {
                const myposts = await db.Posts.findAll({ where: { userId: req.session.user.id }, order: [['createdAt', 'DESC']] });
                if (myposts.length > 0) {
                    res.send(myposts);
                } else {
                    res.send({ msg: 'no posts' });
                }
            } else {
                res.send({ msg: "no user" });

            }
        } catch (err) {
            res.send(err);
        }
    }

}
module.exports = { ...methods };