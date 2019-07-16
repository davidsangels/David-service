
const express = require('express');

const server = express();
const bodyParser = require('body-parser');
const seed = require('../database/connection.js');

const port = 3002;
const router = require('../routes/image-upload.js');
const request = require('request');

const connection = require('../database/connection.js')

server.use(bodyParser());
server.use('/api', router);
server.use(express.static('public'));


server.get('/data', (req, res) => {
console.log('hey');
  connection.connection.query('select * from images where id = 1', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(result);
    }
  });
});

server.get('/data', (req, res) => {

  console.log('dagta')
});
server.get('/seedtest', (req, res) => {
  seed.createImgData();
  res.send('complete');
});

// server.get('dfdfdfd/:id')
server.listen(port, () => console.log(`server listening on port : ${port}`));
module.exports = server;
