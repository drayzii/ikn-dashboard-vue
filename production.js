const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const publicPath = path.join(__dirname, 'dist');
app.use(express.static(publicPath));
const index = path.join(publicPath, 'index.html');

app.get('*', (req, res) => {
  res.sendFile(index);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});