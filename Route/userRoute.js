const express = require('express');
const { getUsers, getUsersById, createUser, updateUser, deleteUser } = require ('../Controller/userController');
const { findBooksByUser } = require('../Controller/bukuController');
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/:userID/buku', findBooksByUser);

module.exports = router;