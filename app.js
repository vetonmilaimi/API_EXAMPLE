const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index.routes');
const postsRouter = require('./routes/posts.routes');
const usersRouter = require('./routes/users.routes');
const sequelize = require('./lib/dbConfig');

sequelize.authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  })


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/user', usersRouter);


sequelize.sync()
module.exports = app;