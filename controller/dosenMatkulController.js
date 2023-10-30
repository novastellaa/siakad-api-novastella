const dosenMatkulController = {}
const { Dosen, MataKuliah, DosenMatkul } = require('../models')
    /*
        this is auto generate example, you can continue 

    */
dosenMatkulController.index = async(req, res) => {
    res.json({
        message: "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async(req, res) => {
    const { id_dosen, id_matkul } = req.body
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getDosen == null || getMatkul === null) {
            throw Error("data tidak ditemukan")
        } else {
            const createDsnMatkul = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
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

dosenMatkulController.getAll = async(req, res) => {
    const getDsnMatkul = await Dosen.findAll({
        include: [{
            model: MataKuliah
        }]
    });
    res.json({
        data: getDsnMatkul
    })
}

dosenMatkulController.getById = async(req, res) => {
    const { id } = req.params;
    const getDsnMatkul = await Dosen.findOne({
        include: [{
            model: MataKuliah
        }],
        where: {
            id: id
        }
    });
    res.json({
        data: getDsnMatkul
    })
}

dosenMatkulController.update = async(req, res) => {
    const { id_dosen, id_matkul } = req.body
    const { id } = req.params
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getDosen == null || getMatkul === null) {
            throw Error("data tidak ditemukan")
        } else {
            const createDsnMatkul = await DosenMatkul.update({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
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

dosenMatkulController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deletelDsnMatkul = await DosenMatkul.destroy({
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


module.exports = dosenMatkulController