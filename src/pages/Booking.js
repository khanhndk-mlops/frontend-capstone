import Header from '../components/Header'
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

export default function Booking(props){
    let {bookingRecord, setBookingRecord} = props
    return (
        <>
            <Header />
            <BookingForm bookingRecord={bookingRecord} setBookingRecord={setBookingRecord}/>
            <Footer />
        </>
    )
}