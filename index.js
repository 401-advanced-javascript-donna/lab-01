require('dotenv').config();
const express = require('express');
const validator = require('./lib/validator.js');

const app = express();
app.use('/docs', express.static('./docs'));

app.get('', requestHandler);
function requestHandler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.write(validator.isBoolean('false'));
  res.end;
}


app.listen(process.env.PORT, () => console.log(`Server is running on port:`, process.env.PORT));