
const express = require('express');
const path = require('path')
const server = express();
const bodyParser = require('body-parser');
const port = 3002;
const db = require('../database/seed.js');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');

server.use(bodyParser());
server.use(compression());
server.use('/:id', expressStaticGzip('public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

server.get('/data/:id', (req, res) => {
  let id = req.params.id;
  let groupId = Number(id.slice(1));
  console.log('ee')
  db.query('select * from images where id = ?', groupId, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(result);
    }
  });
});

server.listen(port, () => console.log(`server listening on port : ${port}`));
module.exports = server;

