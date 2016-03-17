var express = require('express');
var router = express.Router();

var http = require('http');
var path = require('path');
var multer = require('multer');
var AWS = require('aws-sdk');
var fs = require('fs');

var S3_BUCKET = process.env.S3_BUCKET;

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});
var s3 = new AWS.S3();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});

router.post('/upload', upload.any(), function (req, res, next) {

  // get file info from form upload
  var uploadedFile = req.files[0];
  var filePath = path.join(__dirname, '../client/uploads/', uploadedFile.originalname);

  // read file, send to s3
  fs.readFile(filePath, 'utf-8', function (err, fileBuffer) {
    var params = {
      Bucket: S3_BUCKET,
      Key: uploadedFile.filename,
      Body: fileBuffer
    };
    s3.putObject(params, function (err, data) {
      if(err) {
        return next(err);
      }
    });
  });

  // remove file
  fs.unlink(filePath, function(err){
    if(err) {
      return next(err);
    }
    res.redirect('/');
  });

});

// router.get('/sign_s3', function(req, res){
//     aws.config.update({region: 'us-west-2'});
//     aws.config.update({accessKeyId: AWS_ACCESS_KEY , secretAccessKey: AWS_SECRET_KEY });

//     var s3bucket = new aws.S3({params: {Bucket: 'pet-app'}});
//     s3bucket.createBucket(function() {
//       var params = {Key: req.query.file_name, Body: 'Hello!'};
//       s3bucket.upload(params, function(err, data) {
//         if (err) {
//           console.log("Error uploading data: ", err);
//         } else {
//           return data;
//           console.log(data);
//           console.log("Successfully uploaded data to myBucket/myKey");
//         }
//       });
//     });
// });

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
// router.post('/submit_form', function(req, res){
//     username = req.body.username;
//     full_name = req.body.full_name;
//     avatar_url = req.body.avatar_url;
//     res.json("Did that work?");
//     // TODO: Return something useful or redirect
// });

module.exports = router;
