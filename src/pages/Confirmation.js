import Header from '../components/Header'
import Footer from "../components/Footer";
import ConfirmMessage from "../components/ConfirmMessage";

export default function Confirmation(props) {
    let {bookingRecord} = props
    console.log(bookingRecord);
    return (
        <>
            <Header/>
            <ConfirmMessage bookingRecord={bookingRecord} />
            <Footer/>
        </>
    )
}