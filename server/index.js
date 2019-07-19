
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = 3002;
const db = require('../database/seed.js');
server.use(bodyParser());
server.use(express.static('public'));


server.use('/:id', express.static('public'));


server.get('/data/:id', (req, res) => {
  
  let id = req.params.id
  let groupId = Number(id.slice(1))

    console.log('ee')
    connection.connection.query('select * from images where id = ?', groupId, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).send(result);
      }
    });
});



server.get('/data', (req, res) => {
  db.query('select * from images where id = 1', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(result);
    }
  });
});


server.listen(port, () => console.log(`server listening on port : ${port}`));
