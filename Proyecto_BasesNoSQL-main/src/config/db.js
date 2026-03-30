// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/proyectoCursos');
    console.log('MongoDB conectado correctamente');
  } catch (err) {
    console.error('Error al conectar MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;