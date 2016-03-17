var express = require('express');
var router = express.Router();

var http = require('http');
var path = require('path');
var aws = require('aws-sdk');

var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET;

    router.get('/sign_s3', function(req, res){
    aws.config.update({region: 'us-west-2'});
    aws.config.update({accessKeyId: AWS_ACCESS_KEY , secretAccessKey: AWS_SECRET_KEY });

    var s3bucket = new aws.S3({params: {Bucket: 'pet-app'}});
    s3bucket.createBucket(function() {
      var params = {Key: req.query.file_name, Body: 'Hello!'};
      s3bucket.upload(params, function(err, data) {
        if (err) {
          console.log("Error uploading data: ", err);
        } else {
          return data;
          console.log(data);
          console.log("Successfully uploaded data to myBucket/myKey");
        }
      });
    });
});

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
router.post('/submit_form', function(req, res){
    username = req.body.username;
    full_name = req.body.full_name;
    avatar_url = req.body.avatar_url;
    res.json("Did that work?");
    // TODO: Return something useful or redirect
});

module.exports = router;
