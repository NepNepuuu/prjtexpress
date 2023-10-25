const express = require('express');
const { resolve } = require('path');

const router = express.Router();

// Home page route.

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'utilisateurs/app.html'));

});

app.get('/utilisateur', (req, res) => {
  res.send(`<h1>Ceci est une réponse HTML.</h1>`);

});
const sousRoute1 = express.Router();
sousRoute1.get('/page1', (req, res) => {
  res.send('Sous-route 1 - Page 1');
});
app.use('/sous-route1', sousRoute1);
app.get('/utilisateur/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`L'ID de l'utilisateur est : ${userId}`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

