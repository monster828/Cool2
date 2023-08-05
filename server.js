// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/cool', (req, res) => {
  res.sendFile(__dirname + '/public/cool.html');
});
app.get('/Shop', (req, res) => {
  res.sendFile(__dirname + '/public/Shop.html');
});
app.get('/Cart', (req, res) => {
  res.sendFile(__dirname + '/public/Cart.html');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
