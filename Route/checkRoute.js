const express = require('express');

const {  findUsersWithoutBooks, findBooksByUser } = require('../Controller/bukuController');
const {checkUsersID , checkUserWithBook} = require('../Redis/checkUsers')
const router = express.Router();

router.get('/users/checkusers/:userID', checkUsersID);
router.get('/users/checkbooks/:userID', checkUserWithBook);

router.get("/NoBook", findUsersWithoutBooks);
router.get("/users/books/:userID", findBooksByUser);

module.exports = router;