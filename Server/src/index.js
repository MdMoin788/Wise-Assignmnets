const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
require("dotenv").config()
//
const connect = require("./config/db")

const carController = require("./controllers/carController")
const carBookingController = require("./controllers/carBookingController")
app.use("/car/booking" , carBookingController)
app.use("/car" , carController)
const {register,login} = require("./controllers/userController");

app.post("/register",register)
app.post("/login",login)

app.listen( process.env.PORT||5000, async()=>{
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }
})


