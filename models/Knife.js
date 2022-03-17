const mongoose = require("mongoose");

const knifeSchema = mongoose.Schema(
    {
        name: String,
        picture: String,
        length: String,
        price: Number,
        style: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Style'
        }
    },
    {
        timestamps: true
    }
)

const Knife = mongoose.model('Knife', knifeSchema);

module.exports = Knife