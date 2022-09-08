const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: String, required: true },
    rentPerDay: { type: String, required: true },
    availibility: { type: String, default: true },
    location: { type: String, default: "Delhi" },
},
    {
        timestamps: true,
        versionKey: false
    })
module.exports = mongoose.model("car", carSchema)
