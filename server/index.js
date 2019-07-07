

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = 3000;
const listing = require('../database/index.js')
const faker = require('../faker/faker.js')
const unsplash = require('../api/unsplash.js')
const createId = require('../database/connection.js')


server.use(bodyParser());

server.use(express.static('public'))

server.listen(port, () => console.log(`server listening on port : ${port}`));

server.get('/data', (req,res) => {


// console.log(faker.randomDescription)
  console.log('inside get endpoint')
  // pexel
 createId.createId()
  // listing.findAll()
  //   .complete( (err,success) => {
  //     if(err){
  //       console.log('error')
  //     }else {
  //       console.log('success')
  //     }
  // })
  // res.send('data')
  res.send('hey')
})