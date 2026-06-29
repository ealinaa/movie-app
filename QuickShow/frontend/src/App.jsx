import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import { Toaster } from "react-hot-toast"
import Footer from './components/Footer'


const App = () => {

  //to hide navbar in admin page
   const isAdminRoute = useLocation().pathname.startsWith('/admin')
 
  return (
    <>
    {/* to enable the feature of notification in all the componenet we used toaster */}
    <Toaster />
    {!isAdminRoute && <Navbar/>}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetail/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favorite' element={<Favorite/>}/>


    </Routes>
    {/* this footer in shown in all the pages expect admin */}
     {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App