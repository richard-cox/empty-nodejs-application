var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.static('static'));
app.listen(process.env.PORT || 4000);
console.log('running...');