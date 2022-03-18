const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
    {
        name: String,
        logo: String,
        description: String,
    },
    {
        timestamps: true
    }
)

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand