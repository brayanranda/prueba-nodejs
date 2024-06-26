const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/getMessage', require('./api/getMessage'));
app.post('/api/postMessage', require('./api/postMessage'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});