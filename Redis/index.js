const express = require('express');
const checkUser = require('./checkUser');

const app = express();
const port = 5000;

app.get('/user/:id', checkUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
