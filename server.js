var express = require('express');
var server = express();
var mongoose = require('mongoose');


try {
  mongoose.connect('mongodb://localhost:27017/internship', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  });
  console.log("started")
} catch (err) {
  console.log('Failed');
    throw err;
}