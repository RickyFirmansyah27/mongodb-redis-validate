const Sequelize = require('sequelize')
const Buku = require('../Models/bukuModel');
const User = require('../Models/userModel');


const getBuku = async (req, res) => {
    try {
        const response = await Buku.findAll({
            attributes:['id','judul','penulis','tahun'],
        });
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error.message)
    };
}

const getBukuById = async (req, res) => {
    try {
        const response = await Buku.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error.message)
    };
}

const createBuku = async (req, res) => {
    try {
        await Buku.create(req.body)
        res.status(201).json({ msg: "Buku Created" });
    }
    catch (error) {
        console.log(error.message)
    };
}

const updateBuku = async (req, res) => {
    try {
        await Buku.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Buku Updated" });
    }
    catch (error) {
        console.log(error.message)
    };
}

const deleteBuku = async (req, res) => {
    try {
        await Buku.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Buku Deleted" });
    }
    catch (error) {
        console.log(error.message)
    };
}

const findBooksByUser = async (req, res) => {
    try {
        const response = await Buku.findAll({
            attributes:['judul'],
            include: [{
                model: User,
                attributes:['name','email','gender'],
                where: { id: req.params.userID },
            }],
        });
        
        if(response.length == 0){
            res.status(200).json({
                message: "User tidak memiliki buku."
            });
        }else{
            res.status(200).json({
                message: "Buku yang dimiliki user:",
                data: response
            });
        }
        

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message,
        });
    }
};




const findUsersWithoutBooks = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['name', 'email', 'gender'],
            where: {
                id: {
                    [Sequelize.Op.notIn]: Sequelize.literal(`(SELECT userID FROM buku)`),
                },
            },
        });
        res.status(200).json({
            msg: "Daftar User Tidak Memiliki Buku",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            msg: "Terjadi kesalahan saat memuat data",
            error: error.message
        });
    }
};







module.exports = {
    getBuku,
    getBukuById,
    createBuku,
    deleteBuku,
    updateBuku,
    findBooksByUser,
    findUsersWithoutBooks
}
