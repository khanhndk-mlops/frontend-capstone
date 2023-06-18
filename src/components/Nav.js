import {Link} from "react-router-dom";
import {useState} from "react";

export default function Nav() {
    let [menuStatus, setMenuStatus] = useState("close");

    return (
        <>
            <div className={"menu-icon " + menuStatus}
                 onClick={() => setMenuStatus(menuStatus === "open" ? "close" : "open")}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
            <nav className={"item " + menuStatus}>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/'>
                        <li>About</li>
                    </Link>
                    <Link to='/'>
                        <li>Menu</li>
                    </Link>
                    <Link to='/booking'>
                        <li>Booking</li>
                    </Link>
                    <Link to='/'>
                        <li>Order Online</li>
                    </Link>
                    <Link to='/'>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}