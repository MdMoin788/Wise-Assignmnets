import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from "../Styles/Home.module.css";

const Booked = () => {
  const [book, setBook] =  useState([])
  const {id} = useParams()
  console.log('book', book);
let data = Math.floor(Date.now() / 1000)
  console.log('data', data);
  useEffect(() => {
  getData()

  

  

  
  }, [id])

  function getData(){
    axios.get(`http://localhost:5000/car/booking/user/${id}`).then((book) => {
      setBook(book.data)
    })
  }
  return (
    <div className={Styles.DetailPage1}>
      {
        book && book?.map((single)=> <>
   {
    single.carID?.image ?

    <div className={Styles.DetailPage1}>
    <img className={Styles.DetailPageimage1} src={single.carID?.image} alt="" />
    <div className={Styles.DetailPageRight1}>
      <div className={Styles.DetailPageRightcontents12}>
        <p>Name - </p>
        <p>{single.carID?.name}</p>
      </div>
      <div className={Styles.DetailPageRightcontents12}>
        <p>Rent/Day - </p>
        <p>{single.carID?.rentPerDay}</p>
      </div>
      <div className={Styles.DetailPageRightcontents12}>
        <p>Total-Amount - </p>
        <p>{(+single.carID?.rentPerDay)*(+single.totolDays)}</p>
      </div>
    
    
    </div>
  </div> : <></>
   }
        </>)
      }
    </div>
  )
}

export default Booked
