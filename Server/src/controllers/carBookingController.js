const express = require("express");
const router = express.Router();
const carBooking = require("../models/CarBookingModel");
const { populate } = require("../models/carModel");

// for booking the car if availbale then



router.post("", async (req, res) => {
    try {
        const booked = await carBooking.findOne({carID:req.body.carID}).lean().exec()
        if(booked){
            return res.status(200).send({message : "already booked with this car"})
        }
        else{
            const carbooking = await carBooking.create(req.body);
            return res.status(200).send(carbooking)
        }
     
    } catch (e) {
        return res.status(500).send(e.message)
    }
})


// to check how many cars are booked 

router.get("", async (req, res) => {
    try {
        const carbooking = await carBooking.find().lean().exec();
        return res.status(201).send(carbooking)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})
// to get booked car of particular users
router.get("/user/:id", async (req, res) => {
    try {
        const carbooking = await carBooking.find({userID:req.params.id}).populate("carID").lean().exec();
        console.log('carbooking', carbooking);
        return res.status(201).send(carbooking)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})


module.exports = router;
