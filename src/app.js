// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
 
const app = express();
 
// Conectar a la base de datos
connectDB();
 
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente (Items + Cursos)' });
});

// Rutas
app.use('/api', usuarioRoutes)
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));