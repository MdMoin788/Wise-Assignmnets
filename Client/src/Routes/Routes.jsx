import React from 'react'
import {Routes as Router, Route} from "react-router-dom"
import Booked from '../Components/Booked'
import DetailPage from '../Components/DetailPage'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Register from '../Components/Register'
const Routes = () => {
  return (
    <div>
        <Router>
            <Route path='/' element={< Home />}/>
            <Route path='/login' element={< Login />}/>
            <Route path='/register' element={< Register  />}/>
            <Route path='/detailspage/:id' element={< DetailPage  />}/>
            <Route path='/booked/:id' element={< Booked  />}/>

        </Router>
      
    </div>
  )
}

export default Routes
