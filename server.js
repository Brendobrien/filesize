'use strict';

var express = require('express'),
	app = express(),
	upload  = require('multer')();
	
app.use(express.static(process.cwd()));

app.post('/size', upload.single('file'), function (req, res, next) {
  res.json({size:req.file.size})
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('filesize listening on port '+port);
});