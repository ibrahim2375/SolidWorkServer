const db = require('../../models');
const methods = {
    async getSinglePost(req, res) {
        try {
            const getPosts = await db.Posts.findOne({ where: { id: req.params.id } });
            if (getPosts) {
                res.send(getPosts);
            } else {
                res.send('<h1 style="text-align: center">not Founded</h1>');
                // res.status(404);
            }

        } catch (err) {
            res.error(err);
        }
    }

}
module.exports = { ...methods };