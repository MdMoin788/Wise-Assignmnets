const express = require("express");
const router = express.Router();
const Car = require("../models/carModel")
// to add car for user into database
router.post("", async (req, res) => {
    try {
        let car = await Car.create(req.body);
        return res.status(200).send(car)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
// to get all cars for user including available or not

router.get("", async (req, res) => {
    try {
        const car = await Car.find().lean().exec();
        return res.status(201).send(car)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

// to check how many cars are available out of total
router.get("/available", async (req, res) => {


    try {
        const car = await Car.find().lean().exec();
       let cars =  car.filter((cars)=>cars.availibility == "true")
        return res.status(201).send(cars)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})
router.get("/available/search", async (req, res) => {
    console.log(req.query.location)
    let lowerLocate = req.query.location.toLowerCase()
    try {
        const car = await Car.find().lean().exec();
       let cars =  car.filter((cars)=>cars.location.includes(lowerLocate))
        return res.status(201).send(cars)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

// fetch single data means car that user selected for travel
router.get("/single/:id", async (req, res) => {

    try {
        const car = await Car.findOne({_id : req.params.id}).lean().exec();
        return res.status(201).send(car)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})
// update the car status of availibity after booking
router.patch("/update/:id",  async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
        return res.status(201).send(car)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

module.exports = router;
