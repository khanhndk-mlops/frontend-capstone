import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home'
import Booking from "./pages/Booking";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking' element={<Booking/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
