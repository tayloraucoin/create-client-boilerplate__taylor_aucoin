const path = require('path');
const express = require('express');
const app = express();

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set({
    'Content-Encoding': 'gzip',
    'Content-Type': 'text/javascript'
  });
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(process.env.PORT || 3000);
