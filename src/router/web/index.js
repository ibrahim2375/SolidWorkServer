const router = require('express').Router();
router.use('/', require('./home'));
router.use('/posts', require('./posts'));
router.use('/my-posts', require('./myPosts'));
router.use('/post', require('./post'));
router.use('/edit', require('./editPost'));
router.use('/upload', require('./create'));
router.use('/post/update', require('./update'));
router.use('/delete', require('./delete'));
router.use('/users', require('./users'));
router.use('/register', require('./register'));
router.use('/loggedIn', require('./loggedIn'));
router.use('/logout', require('./logOut'));
module.exports = router;