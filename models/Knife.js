const mongoose = require("mongoose");

const knifeSchema = mongoose.Schema(
    {
        picture: String,
        length: String,
        price: String,
        style: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Style'
        },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand'
        }
    },
    {
        timestamps: true
    }
)

const Knife = mongoose.model('Knife', knifeSchema);

module.exports = Knife