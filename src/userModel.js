const { Int32, Timestamp } = require('mongodb');
var mongoose = require('mongoose');
const { timestamp } = require('rxjs');

var userSchema = new mongoose.Schema;({
    sno: {
        type: Int32,
        required: true
    },
    contentno: {
        type: Int32,
        required: true
    },
    attachment: {
        type: Object,
        required: true
    },
    ts: {
        type: Timestamp,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('attachment', userSchema);