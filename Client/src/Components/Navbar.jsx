import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { searchAction } from '../Redux/Action';
import Styles from "../Styles/LoginResgiter.module.css";
const Navbar = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [token, setToken] = useState(useSelector((store) => store.token) || JSON.parse(localStorage.getItem("token")))
  const [toggle, setToggle] = useState(true)
  const [search, setSearch] = useState("")
  const [userid, setUserid] = useState(JSON.parse(localStorage.getItem("userDetails")) || "")
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userDetails")
    Navigate("/")
    setToggle(false)
  }
  
  const handlebookuser = () => {
    if (userid) {
      Navigate(`/booked/${userid.user._id}`)
    }
    else {
      Navigate("/login")
    }
  }
  const hanldeSearch = () => {

  dispatch(searchAction(search))
  console.log('search', search);
  }
  return (
    <div className={Styles.navbar}>
      <div className={Styles.link_btn1}     >
          <Link to="/" className={Styles.link_btn2}>
            Rent Car/Scooty
          </Link>
      </div>
      <div className={Styles.link_btn1}     >
          <div to="/" className={Styles.link_btn2inut}>
           <input type="text" placeholder='Location search' onChange={(e)=>setSearch(e.target.value)} />
           <input type="submit" onClick={hanldeSearch}/>
          </div>
      </div>
      <div>
        <button
          className={Styles.submits}
          type="submit"
          onClick={handlebookuser}
        >
          Your Booked Car
        </button>
      </div>
      <div>
        {
          !toggle || !token ? <Link to="/login" className={Styles.link_btn2}>
            <button
              className={Styles.submits}
              type="submit"
            >
              Sign in
            </button>
          </Link>
            :
            <Link to="/" className={Styles.link_btn2}>
              <button
                className={Styles.submits}
                type="submit"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
        }
      </div>
    </div>
  )
}
export default Navbar
