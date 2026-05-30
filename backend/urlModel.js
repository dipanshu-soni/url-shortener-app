const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    creationTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Url', urlSchema);