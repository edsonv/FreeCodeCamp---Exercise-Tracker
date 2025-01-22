const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

dbConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api/users', require('./routes/users'));
// app.use('/api/users/:_id', require('./routes/exercises'));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
