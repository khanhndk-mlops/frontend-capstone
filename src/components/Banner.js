import {Link} from 'react-router-dom'
import food from '../assets/images/food.jpg'

export default function Banner() {
    return (
        <div className="container banner">
            <div className="photo"><img src={food} alt="food"/></div>
            <div className="text">
                <h1>Little Lemon</h1>
                <p className="subtitle">Melbourne</p>
                <p>We pride ourselves on offering the highest level of service and hospitality to our valued customers,
                    and with our restaurant booking system, we are making it easier for you to enjoy our world-class
                    dining experience. So go ahead and give it a try today – we can't wait to welcome you!
                </p>
                <Link to='/booking'><button>Reserve Table</button></Link>
            </div>
        </div>
    )
}