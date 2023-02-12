const { getBuku, getBukuById, createBuku, updateBuku, deleteBuku } = require ('../Controller/bukuController');

const express = require('express');
const router = express.Router();

router.get('/buku', getBuku);
router.get('/buku/:id', getBukuById);
router.post('/buku', createBuku);
router.patch('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

module.exports = router;