const mongoose = require("mongoose");

const styleSchema = mongoose.Schema(
    {
        name: String,
        picture: String,
        description: String
    },
    {
        timestamps: true
    }
)

const Style = mongoose.model('Style', styleSchema);

module.exports = Style