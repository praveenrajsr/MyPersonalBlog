var bodyParser = require('body-parser');
const busboy   = require('connect-busboy');
const fs = require('fs-extra');
const express = require( 'express');
const mongoose = require('mongoose');
const path = require('path');
module.exports = function(app, genpath){
//busboy use
  app.use(busboy());
  app.use(express.static(path.join(__dirname, 'public')));
  mongoose.promise = global.promise;

  mongoose.connect('mongodb://localhost:27017/blog');

  const schema = require('./schema');

  app.get('/',function(req,res){
    res.render('index');
  });
  //support parsing of application/json type post data
  app.use(bodyParser.json());
  //support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/video',function(req, res){
    res.render('video');
  });
  app.get('/list', function(req, res){
    res.render('list');
  });
  app.get('/admin', function(req,res){
    res.render('admin');
  });
  app.get('/comment', function(req,res){
    res.send('Sorry for the inconvienience, This feature will be added soon!');
  });
  /*Post The data*/
  app.post('/save', (req, res, next) => {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename){
      console.log("Uploading" + filename);
      //path where the file is being uploaded
      fstream = fs.createWriteStream('./public/img/' + filename);
      dirname = path.join('./img/' + filename);
      file.pipe(fstream);
      fstream.on('close', function(){
        console.log('Upload Success' + filename);
        let name = new schema({
            title: req.body.title,
            content: req.body.content,
            date: Date.now(),
            image: dirname
        });
        name.save((err) => {
          if(err) throw err;
          console.log(`saved : ${name}`);
          res.redirect('/article');
        });
      });
    });
  });
  app.get('/article', (req, res) =>{
    Name.find({ }, (err, results) => {
      if(err) throw err;
      var data;
      app.get('/result.title',function(req, res){
        res.render('article');
      });
      for(result of results){
        data.push(
          result.image
        );
        res.render('/',{
          data: data
        });
      }
    });
  });
}
