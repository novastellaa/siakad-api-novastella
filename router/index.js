const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatakuliah = require("./matakuliah");
const routeDosenMatkul = require("./dosenMatkul");
const routeJadwalMatkul = require("./jadwalMatkul");
const routeMhsBimbingan = require("./mahasiswaBimbingan");
const route = express.Router()

route.get('/', exampleController.index)
route.use('/mahasiswa', routeMahasiswa);
route.use('/dosen', routeDosen);
route.use('/matkul', routeMatakuliah);
route.use('/dosen-matkul', routeDosenMatkul);
route.use('/jadwal-matkul', routeJadwalMatkul);
route.use('/mahasiswa-bimbingan', routeMhsBimbingan);


module.exports = route