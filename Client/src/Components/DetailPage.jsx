import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Styles from "../Styles/Home.module.css";
const DetailPage = () => {
  const { id } = useParams()
  const Navigate = useNavigate()
  const [days, setDays] = useState(1)
  const [userID, setUSerID] = useState(JSON.parse(localStorage.getItem("userDetails")) || "")
  const [single, setSingle] = useState(useSelector((store) => store.cars) || [])
  useEffect(() => {
    getData()
  }, [])
  

  function getData(){
    axios.get(`http://localhost:5000/car/single/${id}`).then((single) => {
      setSingle(single.data)
    })
  }
  const handleBooked = () => {
    // userID: { type: String, required: true },
    // carID: { type: String, required: true },
    // totolDays: { type: String, required: true },
    // totalAmount: { type: String, required: true },
    // refrenceId: { type: String, required:true },
    if (userID.user?._id && single?._id && days) {
      let text = "Press a button!\nEither OK or Cancel."
      if (window.confirm(text)) {
        let idsRed  = Math.random().toString()
        let ran = idsRed.split(".")
        console.log('ran', ran);
        let bookCar = {
          userID: userID.user._id,
          carID: single._id,
          totolDays: days,
          totalAmount: single.rentPerDay * days,
          refrenceId: ran[1]
        }
        axios.post("http://localhost:5000/car/booking", bookCar).then((booked) => {
        })
        axios.patch(`http://localhost:5000/car/update/${id}`, {availibility:false}).then((booked) => {
        })
        return Navigate(`/booked/${userID.user._id}`)
      }
      else {
        return Navigate("/")
      }
    }
    else {
      return       Navigate("/login")

    }
  }
  return (
    <div className={Styles.detailsContainer}>
      <div className={Styles.DetailPageLeft}>
        <div className={Styles.DetailPageRight}>
          <div className={Styles.DetailPageRightcontents1}>
            <p>Name :-</p>
            <p>{single.name}</p>
          </div>
          <div className={Styles.DetailPageRightcontents1}>
            <p>Rent/Day :-</p>
            <p>{single.rentPerDay}</p>
          </div>
          <div className={Styles.DetailPageRightcontents1}>
            <p>Capacity :-</p>
            <p>{single.capacity}</p>
          </div>
          <div className={Styles.DetailPageRightcontents1}>
            <p>Days :-</p>
            <input type="text" onChange={(e) => setDays(e.target.value)} />
          </div>
          <div className={Styles.DetailPageRightcontents1}>
            <p>Total - Amount :- </p>
            <p>₹ {days * (single.rentPerDay) || single.rentPerDay}</p>
          </div>
        </div>
        <button className={Styles.DetailPageRightcontents1Btn} onClick={handleBooked}>Book Now</button>
      </div>
      <div className={Styles.DetailPage}>
        <img className={Styles.DetailPageimage} src={single.image} alt="" />
        <div className={Styles.DetailPageRight}>
          <div className={Styles.DetailPageRightcontents}>
            <p>Name - </p>
            <p>{single.name}</p>
          </div>
          <div className={Styles.DetailPageRightcontents}>
            <p>Location - </p>
            <p>{single.location}</p>
          </div>
          <div className={Styles.DetailPageRightcontents}>
            <p>Rent/Day - </p>
            <p>{single.rentPerDay}</p>
          </div>
          <div className={Styles.DetailPageRightcontents}>
            <p>Capacity - </p>
            <p>{single.capacity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailPage
