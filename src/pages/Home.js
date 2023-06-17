import Header from '../components/Header'
import Banner from '../components/Banner'
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer";

export default function Home(){
    return (
        <>
            <Header />
            <Banner />
            <Specials />
            <Testimonials />
            <Footer />
        </>
    )
}