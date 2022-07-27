const db = require('../../../models');
const express = require('express');
const router = express.Router();
const session = require('express-session')
// const update_controller = require('../../controller/update_controller');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}/solid-work/public/uploads`)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
let upload = multer({ storage: storage })
router.put('/', upload.single('file'), async (req, res) => {
    const title = req.body.title;
    const email = req.body.email;
    const description = req.body.description;
    const company = req.body.company;
    const website = req.body.website;
    const id = req.body.id;
    const file = req.file
    if (!file) {
        return res.send('please upload a file');
    } else {
        if (title == '' && email == '' && description == '' && website == '' && company == '' && id == '') {
            return res.send('data cant be empty')
        } else {
            await db.Posts.update({ email: email, website: website, company: company, title: title, description: description, img: file.filename, userId: req.session.user.id }, {
                where: { id: id, userId: req.session.user.id }
            }).then(function (result) {
                console.log(result);
                res.send('success');
            });
        }
    }

});

module.exports = router;