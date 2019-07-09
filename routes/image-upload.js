const express = require('express');

const router = express.Router();
const upload = require('../api/s3.js');

const singleUpload = upload.single('image');


router.post('/image-upload', (req, res) => {
  console.log('posted');
  singleUpload(req, res, (err) => {
    if (err) {
      throw err;
    } else {
      return res.json({ imageUrl: req.file.location });
    }
  });
});

module.exports = router;
