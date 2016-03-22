//TODO: change schema as desired:
var mongoose = require('mongoose');

module.exports = mongoose.model('Record', {
    artist: {
        type: String,
        default: ''
    },
    album: {
        type: String,
        default: ''
    },
    year: {
        type: Number,
        required: true
    }
});
