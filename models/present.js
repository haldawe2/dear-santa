const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const Schema = moongose.Schema;

const presentSchema = new Schema ({
        name: {type: String, required: true},
        image: {type: String},
        price: {type: Number},
        recipient: {type: String, required: true},
        description: {type: String}
});

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;