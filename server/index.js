const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = 3000;
const listing = require('../database/index.js')
server.use(bodyParser());

server.use(express.static('public'))

server.listen(port, () => console.log(`server listening on port : ${port}`));

server.get('/data', (req,res) => {

  console.log('inside get endpoint')
  listing.findAll()
    .complete( (err,success) => {
      if(err){
        console.log('error')
      }else {
        console.log('success')
      }
  })
  res.send('data')
})