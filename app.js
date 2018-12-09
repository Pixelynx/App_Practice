const express = require('express');
const fruitsRouter = require('./routes/fruits');
const usersRouter = require('./routes/users');
const app = express();
let port = 3000;

app.use('/fruits', fruitsRouter);
app.use('/users', usersRouter);

app.get('/*', (req, res) => {
  res.send('Noup!');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
