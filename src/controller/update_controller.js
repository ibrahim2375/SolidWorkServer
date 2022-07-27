const db = require('../../models');
const session = require('express-session')
const methods = {
    async update(req, res) {
        try {
            if (req.session.user) {
                const title = req.body.title;
                const email = req.body.email;
                const description = req.body.description;
                const company = req.body.company;
                const website = req.body.website;
                const file = req.file;
              console.log(email, description, website, company, file.filename, req.session.user.id); 
              res.send('success');


            } else {
                res.send("no user" );
            }
        } catch (err) {
            res.send(err);
        }
    }

}
module.exports = { ...methods };
// const title = req.body.title;
// const email = req.body.email;
// const description = req.body.description;
// const company = req.body.company;
// const website = req.body.website;
// const file = req.file
// if (!file) {
//     return res.send('please upload a file');
// } else {
//     if (title == '' && email == '' && description == '' && website == '' && company == '') {
//         return res.send('data cant be empty')
//     } else {
//         await db.Posts.create({ email: email, website: website, company: company, title: title, description: description, img: file.filename, userId: req.session.user.id });
//         res.json('success');
//     }
// }

// const multer = require('multer');
// process.chdir('../');
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, `${process.cwd()}/solid-work/public/uploads`)
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// let upload = multer({ storage: storage })
// // const { upload } = require('./multer');
// router.post('/', (req, res) => {

//         const title = req.body.title;
//         const email = req.body.email;
//         const description = req.body.description;
//         const company = req.body.company;
//         const website = req.body.website;
//         const file = req.file;
//         if (!file) {
//             return res.send('please upload a file');
//         }
//         if (title == '' && email == '' && description == '' && website == '' && company == '') {
//             return res.send('data cant be empty')
//         }
//         // await db.Posts.create({ email: email, website: website, company: company, title: title, description: description, img: file.filename, userId: req.session.user.id });
//         console.log(email, description, website, company, file.filename, req.session.user.id);
//         res.send('successfully Updated!');
   
// });
