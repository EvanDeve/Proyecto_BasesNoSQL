// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const residuoRoutes = require('./routes/residuoRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const centroRoutes = require('./routes/centroRoutes');
 
const app = express();
 
// Conectar a la base de datos
connectDB();
 
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rutas
app.use('/api', usuarioRoutes);
app.use('/api', residuoRoutes);
app.use('/api', reporteRoutes);
app.use('/api', centroRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));