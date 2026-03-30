// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

// Conexión a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de cursos funcionando correctamente' });
});

// Rutas
app.use('/api', cursoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});