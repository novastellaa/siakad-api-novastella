const { Dosen, Mahasiswa, MahasiswaBimbingan } = require('../models')


const MahasiswaBimbinganController = {}
    /*
        this is auto generate example, you can continue 

    */
MahasiswaBimbinganController.index = async(req, res) => {
    res.json({
        message: "Hello MahasiswaBimbinganController"
    })
}

MahasiswaBimbinganController.create = async(req, res) => {
    const { id_dosen, id_mahasiswa } = req.body;
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        if (getDosen === null || getMahasiswa === null) {
            throw Error('data tidak ditemukan')
        } else {
            const createMhsBimbingan = await MahasiswaBimbingan.create({
                id_mahasiswa: getMahasiswa.id,
                id_dosen: getDosen.id
            })
            return res.status(200).json({
                message: "data berhasil ditambahkan"
            })
        }
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}


MahasiswaBimbinganController.getAll = async(req, res) => {
    const getMhsBimbingan = await Dosen.findAll({
        include: [{
            model: Mahasiswa
        }]
    });
    res.json({
        data: getMhsBimbingan
    })
}


MahasiswaBimbinganController.getById = async(req, res) => {
    const { id } = req.params;
    const getMhsBimbingan = await Dosen.findOne({
        include: [{
            model: Mahasiswa
        }],
        where: {
            id: id
        }
    });
    res.json({
        data: getMhsBimbingan
    })
}


MahasiswaBimbinganController.update = async(req, res) => {
    const { id_dosen, id_mahasiswa } = req.body
    const { id } = req.params
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        if (getDosen == null || getMahasiswa === null) {
            throw Error("data tidak ditemukan")
        } else {
            const createMhsBimbingan = await MahasiswaBimbingan.update({
                id_dosen: getDosen.id,
                id_mahasiswa: getMahasiswa.id
            }, {
                where: {
                    id: id
                }
            })
            return res.status(200).json({
                message: "data berhasil ditambahkan !"
            })
        }
    } catch (err) {
        return res.status(404).json({
            Message: err.message
        })
    }
}


MahasiswaBimbinganController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deletelMhsBimbingan = await MahasiswaBimbingan.destroy({
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

module.exports = MahasiswaBimbinganController