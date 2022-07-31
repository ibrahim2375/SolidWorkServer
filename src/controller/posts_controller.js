const db = require('../../models');
const { Op } = require('sequelize');
const methods = {
    async getPosts(req, res) {
        try {
            let search = req.body.search;
            if (!search) {
                const getPosts = await db.Posts.findAll({ order: [['createdAt', 'DESC']] });
                res.send(getPosts);
            } else {
                const get_search = await db.Posts.findAll({
                    where: {
                        [Op.or]: {
                            title: { [Op.like]: `%${search}%` },
                            company: { [Op.like]: `%${search}%` },
                            description: { [Op.like]: `%${search}%` },
                        }


                    }, order: [['createdAt', 'DESC']]
                });
                res.send(get_search);
            }
        } catch (err) {
            res.error(err);
        }
    }

}
module.exports = { ...methods };