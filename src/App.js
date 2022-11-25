import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import RoomBooking from "./components/RoomBooking"
import React, { useState } from "react"
import Team from "./components/Team"
import AppCalendar from './components/AppCalendar'
import Time from './components/Time'
import RoomInventory from './components/RoomInventory'
import Searchbtn from './components/Searchbtn'
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
    
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
