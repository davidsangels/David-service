
const express = require('express');

const server = express();
const bodyParser = require('body-parser');
const seed = require('../database/connection.js');

const port = 3000;
const router = require('../routes/image-upload.js');


const request = require('request');
const connection = require('../database/connection.js')

server.use(bodyParser());
server.use('/api', router);
server.use(express.static('public'));
server.listen(port, () => console.log(`server listening on port : ${port}`));

server.post('/data', (req, res) => {
  connection.connection.query('select * from images where id = ?', req.body.id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});
const api = 'https://api.unsplash.com/search/photos?per_page=15?page=1&query=office&client_id=7a867606bd956074fa8fb943a9d2f0f5028832bcc0a42ccbde1265c06a87fedb'

server.get('/addImage', () => {
  request(api, (err, result) => {
    if (err) {
      throw err;
    } else {
      // for each result.body.result which is a array
      // take element alt_description
      // take urls.regular alt description put them in a array
      // iterate the array and do an upload on the arrays first index
      // then save the array into database

      const body = JSON.parse(result.body);
      const galleryData = [];
      body.results.forEach((element) => {
        // run upload on element.url.regular
        //


        const pushArr = [];
        pushArr.push(element.alt_description);
        pushArr.push(element.urls.regular);
        galleryData.push(pushArr);
      });
      console.log(galleryData);
      // iterate the array of gallerydata
      // do a post request
      // pass in eachof second index of array item in mutlers3 upload function
      // on success send back url location
      // chen
    }
  });
});
server.get('/seedtest', (req, res) => {
  seed.createImgData();
  res.send('complete');
});
