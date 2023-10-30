const { MataKuliah } = require('../models');



const matakuliahController = {}

/*
    this is auto generate example, you can continue 

*/
matakuliahController.index = async(req, res) => {
    res.json({
        message: "Hello matakuliahController"
    })
}

matakuliahController.create = async(req, res) => {
    const { kode_matkul, nama, sks } = req.body //destructing object
    try {
        const createMatakuliah = await MataKuliah.create({
            kode_matkul: kode_matkul,
            nama: nama,
            sks: sks
        })
        return res.status(201).json({
            message: 'data berhasil ditambahkan'
        })
    } catch (err) {
        // console.log(err)
        return res.status(500).json({
            message: err
        })
    }
};

matakuliahController.getAll = async(req, res) => {
    try {
        const getMatakuliah = await MataKuliah.findAll({
            order: [
                ["createdAt", "DESC"] // untuk menampilkan urutan data yang baru saja dibuat **DESC itu dari bawah keatas **ASC tu dari atas ke bawah
            ]
        });
        return res.status(200).json({
            data: getMatakuliah
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

matakuliahController.getById = async(req, res) => {
    const { id } = req.params
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getDetailMatkul
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

matakuliahController.update = async(req, res) => {
    const { kode_matkul, nama, sks } = req.body //destructing object
    const id = req.params.id
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        });
        if (getDetailMatkul == null) {
            return res.status(404).json({
                message: 'data tidak ada !'
            })
        }
        const updateMatkul = await MataKuliah.update({
            kode_matkul: kode_matkul,
            nama: nama,
            sks: sks
        }, {
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: 'data berhasil diubah'
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

matakuliahController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deletelMatkul = await MataKuliah.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "data berhasil dihapus"
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

module.exports = matakuliahController;