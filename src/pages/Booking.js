import Header from '../components/Header'
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import {Link} from "react-router-dom";

export default function Booking(props){
    let {bookingRecord, setBookingRecord} = props
    return (
        <>
            <Header />
            <Link to="/confirmation">yyyy</Link>
            <BookingForm bookingRecord={bookingRecord} setBookingRecord={setBookingRecord}/>
            <Footer />
        </>
    )
}