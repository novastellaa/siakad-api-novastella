const dosenController = {}
const { Dosen } = require('../models');
/*
    this is auto generate example, you can continue 

*/
dosenController.index = async(req, res) => {
    res.json({
        message: "Hello dosenController"
    })
}


dosenController.create = async(req, res) => {
    const { nama, nidn, alamat } = req.body //destructing object
    try {
        const createDosen = await Dosen.create({
            nama: nama,
            nidn: nidn,
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


dosenController.getAll = async(req, res) => {
    try {
        const getDosen = await Dosen.findAll({
            order: [
                ["createdAt", "DESC"] // untuk menampilkan urutan data yang baru saja dibuat **DESC itu dari bawah keatas **ASC tu dari atas ke bawah
            ]
        });
        return res.status(200).json({
            data: getDosen
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};


dosenController.getById = async(req, res) => {
    const { id } = req.params
    try {
        const getDetailDsn = await Dosen.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getDetailDsn
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};


dosenController.update = async(req, res) => {
    const { nama, nidn, alamat } = req.body //destructing object
    const id = req.params.id
    try {
        const getDetailDsn = await Dosen.findOne({
            where: {
                id: id
            }
        });
        if (getDetailDsn == null) {
            return res.status(404).json({
                message: 'data tidak ada !'
            })
        }
        const updateDosen = await Dosen.update({
            nama: nama,
            nidn: nidn,
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


dosenController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deletelDsn = await Dosen.destroy({
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


module.exports = dosenController