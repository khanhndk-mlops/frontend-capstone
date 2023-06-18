import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/'><div className="item logo"><img src={logo}  alt="logo"/></div></Link>
    )
}