const Content = require("../models/contentModel.js");

module.exports.getContents = async (req, res) => {
    try {
        const content = await Content.find({}, ['_id', 'judul', 'author', 'content','year']);
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.getContentById = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        res.json(content);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.saveContent = async (req, res) => {
    const content = new Content(req.body);
    try {
        const insertedContent = await content.save();
        res.status(201).json(insertedContent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.updateContent = async (req, res) => {
    try {
        const updatedcontent = await Content.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcontent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.deleteContent = async (req, res) => {
    try {
        const deletedcontent = await Content.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcontent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}