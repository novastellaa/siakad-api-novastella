const { MataKuliah, JadwalMatkul } = require('../models')


const JadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
JadwalMatkulController.index = async(req, res) => {
    res.json({
        message: "Hello JadwalMatkulController"
    })
}

JadwalMatkulController.create = async(req, res) => {
    const { id_matkul, hari, jam } = req.body;
    try {
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getMatkul === null) {
            throw Error("data tidak ditemukan")
        } else {
            const createJadwalMatkul = await JadwalMatkul.create({
                id_matkul: getMatkul.id,
                hari: hari,
                jam: jam
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

JadwalMatkulController.getAll = async(req, res) => {
    const getJadwal = await JadwalMatkul.findAll({
        include: [{
            model: MataKuliah,
        }, ],
    });

    res.json({
        data: getJadwal,
    });
};


JadwalMatkulController.getById = async(req, res) => {
    const { id } = req.params
    try {
        const getJadwalMatkul = await JadwalMatkul.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getJadwalMatkul
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
};

JadwalMatkulController.update = async(req, res) => {
    const { id_matkul, hari, jam } = req.body //destructing object
    const { id } = req.params
    try {
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        });
        if (getMatkul == null) {
            throw Error("data tidak ditemukan")
        } else {
            const updateJadwal = await JadwalMatkul.update({
                id_matkul: getMatkul.id,
                hari: hari,
                jam: jam
            }, {
                where: {
                    id: id
                }
            })
            return res.status(200).json({
                message: 'data berhasil diubah'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
};

JadwalMatkulController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deleteJadwalMatkul = await JadwalMatkul.destroy({
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

module.exports = JadwalMatkulController;
