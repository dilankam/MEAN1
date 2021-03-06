const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path'); // NodeJS Package for file paths

mongoose.Promise=global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
      console.log('Could NOT connect to database: ', err);
    } else {
      console.log('Connected to database: ' + config.db);
    }
  });

// app.get('/', function(req, res){
//     res.send('<h1>hello world</h1>');
// });

// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(8080,function(){
    console.log("port 8080");
});