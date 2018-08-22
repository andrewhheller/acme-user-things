const express = require('express');
const app = express();

const path = require('path')

const apiRoute = require('./routes/api')




app.use('/api', apiRoute);
app.use('/dist', express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});





module.exports = app;
