const express = require("express");
const router = express.Router();
const {
    getContents,
    getContentById,
    saveContent,
    updateContent,
    deleteContent
} = require('../controller/contentController')

router.get('/Contents', getContents);
router.get('/Contents/:id', getContentById);
router.post('/Contents', saveContent);
router.patch('/Contents/:id', updateContent);
router.delete('/Contents/:id', deleteContent);

module.exports = router;