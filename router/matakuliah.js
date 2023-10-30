const express = require("express");
const matakuliahController = require("../controller/matakuliahController");
const routeMatakuliah = express.Router();


routeMatakuliah.post('/create', matakuliahController.create);
routeMatakuliah.get('/get', matakuliahController.getAll);
routeMatakuliah.get('/get/:id', matakuliahController.getById);
routeMatakuliah.put('/update/:id', matakuliahController.update);
routeMatakuliah.delete('/delete/:id', matakuliahController.delete);

module.exports = routeMatakuliah;