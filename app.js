const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
//used
app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'Post'],
    credentials: true, //to allow to cookies take session data
}));
app.use(session({
    key: 'userId',
    secret: 'bomtom',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000000,
    }
}))
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
require('dotenv').config();
const port = process.env.PORT
const host = process.env.URL
//database
const db = require('./models');
db.sequelize.sync();
//database
//router
const indexOfRouter = require('./src/router/index');
app.use('/', indexOfRouter);
//router

app.listen(port, host, () => {
    console.log('server running successfully....');
});