const Buku = require('../Models/bukuModel');
const User = require('../Models/userModel')
const redisCache = require('./redisChache')

const checkUserWithBook = async (req, res) => {
    const userId = req.params.userID;
    const redisKey = `book:${userId}`;

    let userData;
    try {
        userData = await redisCache.get(redisKey);
        if (userData == undefined || userData == null) {
            const response = await Buku.findAll({
                attributes: ['judul'],
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'gender'],
                    where: { id: req.params.userID },
                }],
            });
            userData = response;
            await redisCache.set(redisKey, JSON.stringify(userData));
            console.log(`Data set to Redis for user ${userId}`);
            if (!response) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }
        }
        if (userData != undefined) {

            try {
                userData = await redisCache.get(redisKey);

                if (userData) {
                    userData = JSON.parse(userData);
                    return res.status(200).send({
                        data: userData
                    });
                }
            } catch (error) {
                console.error('Error while retrieving data from Redis', error);
                return res.status(500).send({
                    error: 'Error while retrieving data from Redis'
                });
            }

        }


    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Error while parsing JSON', error);
            return res.status(500).send({
                error: 'Error while parsing JSON'
            });
        }

        console.error('Error while retrieving data from Redis', error);
        return res.status(500).send({
            error: 'Error while retrieving data from Redis'
        });
    }
    req.userData = userData;

};

const checkUsersID = async (req, res) => {
    const userId = req.params.userID;
    const redisKey = `user:${userId}`;

    let userData;
    try {
        userData = await redisCache.get(redisKey);
        if (userData == undefined || userData == null) {
            const response = await User.findOne({
                where: {
                    id: req.params.userID
                }
            });
            userData = response;
            await redisCache.set(redisKey, JSON.stringify(userData));
            console.log(`Data set to Redis for user ${userId}`);
            if (!response) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }
        }
        if (userData != undefined) {

            try {
                userData = await redisCache.get(redisKey);

                if (userData) {
                    userData = JSON.parse(userData);
                    return res.status(200).send({
                        data: userData
                    });
                }
            } catch (error) {
                console.error('Error while retrieving data from Redis', error);
                return res.status(500).send({
                    error: 'Error while retrieving data from Redis'
                });
            }

        }


    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Error while parsing JSON', error);
            return res.status(500).send({
                error: 'Error while parsing JSON'
            });
        }

        console.error('Error while retrieving data from Redis', error);
        return res.status(500).send({
            error: 'Error while retrieving data from Redis'
        });
    }
    req.userData = userData;

};


module.exports = {
    checkUserWithBook,
    checkUsersID
};
