const express = require("express");
const MhsBimbinganController = require("../controller/MahasiswaBimbinganController");
const routeMhsBimbingan = express.Router();


routeMhsBimbingan.post('/create', MhsBimbinganController.create);
routeMhsBimbingan.get('/get', MhsBimbinganController.getAll);
routeMhsBimbingan.get('/get/:id', MhsBimbinganController.getById);
routeMhsBimbingan.put('/update/:id', MhsBimbinganController.update)
routeMhsBimbingan.delete('/delete/:id', MhsBimbinganController.delete);

module.exports = routeMhsBimbingan;