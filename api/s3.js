const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

//  sets config credentials?

aws.config.update({
  secretAccessKey: 'wnzaImdh0IH2QDfjpqAg1NqgqliaOSboxs/0o7MB',
  accessKeyId: 'AKIAJXZDJHAQ7RJU7OTA',
  region: 'us-west-1',
});
// const config= aws.config.loadFromPath('./config.json');
// AWSAccessKeyId = AKIAJXZDJHAQ7RJU7OTA
// AWSSecretKey = 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
const S3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: 'hrimages',
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: 'testing metadata' });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
