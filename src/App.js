import './App.css';
import { getDatabase, ref, set } from 'firebase/database';
import { uid } from "uid"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import RoomBooking from "./components/RoomBooking"
import React, { useState } from "react"



function App() {
    
  

    return (
      <>
      <Router>
        <Routes>
          <Route path="/BookingApp" element={<Dashboard />} exact/>
          <Route path="/BookingApp/roombooking" element={<RoomBooking />}/>
        </Routes>
           
      </Router>
      </>
    )
}

export default App;
