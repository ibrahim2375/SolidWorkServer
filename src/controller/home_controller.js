const db = require('../../models');
const methods = {
    async getHomeData(req, res) {
        try {
            const gethomeData = await db.Home_Data.findAll();
            if (gethomeData) {
                res.send(gethomeData);
            }

        } catch (err) {
            res.error(err);
        }
    }

}
module.exports = { ...methods };