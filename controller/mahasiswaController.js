const { Mahasiswa } = require('../models');



const mahasiswaController = {}

mahasiswaController.index = async(req, res) => {
    res.json({
        message: "Hello mahasiswaController"
    })
}

mahasiswaController.create = async(req, res) => {
    const { nama, nim, alamat } = req.body //destructing object
    try {
        const createMahasiswa = await Mahasiswa.create({
            nama: nama,
            nim: nim,
            alamat: alamat
        })
        return res.status(201).json({
            message: 'data berhasil ditambahkan'
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

mahasiswaController.getAll = async(req, res) => {
    try {
        const getMahasiswa = await Mahasiswa.findAll({
            order: [
                ["createdAt", "DESC"] // untuk menampilkan urutan data yang baru saja dibuat **DESC itu dari bawah keatas **ASC tu dari atas ke bawah
            ]
        });
        return res.status(200).json({
            data: getMahasiswa
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

mahasiswaController.getById = async(req, res) => {
    const { id } = req.params
    try {
        const getDetailmhs = await Mahasiswa.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getDetailmhs
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

mahasiswaController.update = async(req, res) => {
    const { nama, nim, alamat } = req.body //destructing object
    const id = req.params.id
    try {
        const getDetailmhs = await Mahasiswa.findOne({
            where: {
                id: id
            }
        });
        if (getDetailmhs == null) {
            return res.status(404).json({
                message: 'data tidak ada !'
            })
        }
        const updateMahasiswa = await Mahasiswa.update({
            nama: nama,
            nim: nim,
            alamat: alamat
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

mahasiswaController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deletelmhs = await Mahasiswa.destroy({
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


module.exports = mahasiswaController;