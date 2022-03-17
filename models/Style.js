const mongoose = require("mongoose");

const styleSchema = mongoose.Schema(
    {
        name: String,
        picture: String,
        material: String,
        handle: String,
        description: String,
        brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
        },
        knives: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Knife'
        }]
    },
    {
        timestamps: true
    }
)

const Style = mongoose.model('Style', styleSchema);

module.exports = Style