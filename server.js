const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static('build'));

app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}`);
});
