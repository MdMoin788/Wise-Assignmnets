import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataStore } from '../Redux/Action'
import { Link } from "react-router-dom";
import Styles from "../Styles/Home.module.css";
import data  from "../json.json"
const Home = () => {
console.log('data', data);

  const [cars, SetCars] = useState(useSelector((store) => store.cars) || data || [])
  console.log('cars', cars);
  const search = useSelector((store) => store.search)
  useEffect(() => {
    axios.get("http://localhost:5000/car/available").then((cars) => {
      SetCars(cars.data)
    })
  }, [])

  
  
  return (
    <div className={Styles.Home_container}>
      {
        cars.length == 0 ? <div>No Cars Available, All Are booked, Pls Check Another Time</div> :
          cars?.map((car) =>
            <div className={Styles.Home_containerChild}>
              <div className={Styles.image}><img className={Styles.imageImg} src={car.image} alt="" /></div>
              <div className={Styles.imageIm2}>
                <div className={Styles.contents}> <p>Name - </p> {car.name}</div>
                <div className={Styles.contents}><p>Location - </p> {car.location}</div>
                <div className={Styles.contents}> <p>Rent/Day - </p> {car.rentPerDay}</div>
                <div className={Styles.contents}><p>Capacity - </p> {car.capacity}</div>
                <Link to={`/detailspage/${car._id}`} className={Styles.link_btn2}>
                  <button className={Styles.btn}>Rent Now</button>
                </Link>
              </div>
            </div>
          )
      }
    </div>
  )
}
export default Home
