const mongoose = require("mongoose");
const carBookingSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    carID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "car",
        required: true,
    },
    
    totolDays: { type: String, required: true },
    totalAmount: { type: String, required: true },
    refrenceId: { type: String, required: true },
},
    {
        timestamps: true,
        versionKey: false
    })
module.exports = mongoose.model("car-booking", carBookingSchema)