const port = process.env.PORT || 3777

const express = require('express');
const app = express();
const mongodb = require('./db/database');

app.use('/', require('./routes'));


mongodb.initDb((err) => {
  if(err) {
    console.log(`Following error encountered during Monogdb init: ${err}`)
  } else {
    app.listen(port, () => {console.log(`Running on port ${port}`)});
  }
})
