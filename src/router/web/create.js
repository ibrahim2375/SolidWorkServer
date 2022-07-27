const db = require('../../../models');
const express = require('express');
const session = require('express-session');
const router = express.Router();
const multer = require('multer');
process.chdir('../');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}/solid-work/public/uploads`)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
let upload = multer({ storage: storage })
router.post('/', upload.single('file'), async (req, res) => {
    const title = req.body.title;
    const email = req.body.email;
    const description = req.body.description;
    const company = req.body.company;
    const website = req.body.website;
    const file = req.file
    if (!file) {
        return res.send('please upload a file');
    } else {
        if (title == '' && email == '' && description == '' && website == '' && company == '') {
            return res.send('data cant be empty')
        } else {
            await db.Posts.create({ email: email, website: website, company: company, title: title, description: description, img: file.filename, userId: req.session.user.id });
            res.json('success');
        }
    }

});
module.exports = router;