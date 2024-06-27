const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const sequelize = require('./config/db');

const app = express();

const allowedOrigins = [
  'https://ponto-track-40cc3d399503.herokuapp.com',
  'https://ponto-track-40cc3d399503.herokuapp.com/api/items',
  'http://localhost:3001',
  'http://localhost:3001/api/items'
];


app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

app.use('/api', itemRoutes);

app.use(express.static(path.join(__dirname, '../ponto-track/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../ponto-track/build/index.html'));
});

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
