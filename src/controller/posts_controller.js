const db = require('../../models');
const methods = {
    async getPosts(req, res) {
        try {
            const getPosts = await db.Posts.findAll({ order: [['createdAt', 'DESC']] });
            if (getPosts) {
                res.send(getPosts);
            }

        } catch (err) {
            res.error(err);
        }
    }

}
module.exports = { ...methods };