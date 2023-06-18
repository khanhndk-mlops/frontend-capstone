import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home'
import Booking from "./pages/Booking";
import Confirmation from './pages/Confirmation'
import {useState} from "react";

function App() {
    let [bookingRecord, setBookingRecord] = useState({
        name: '',
        phone: '',
        date: new Date().toISOString().split('T')[0],
        time: '',
        guests: 1,
        occasion: '18:00'
    });
    return (
        <BrowserRouter basename='/frontend-capstone'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking'
                       element={<Booking bookingRecord={bookingRecord} setBookingRecord={setBookingRecord}/>}/>
                <Route path='/confirmation' element={<Confirmation bookingRecord={bookingRecord}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
