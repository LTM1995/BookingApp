import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import RoomBooking from "./pages/RoomBooking"




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
