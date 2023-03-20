import "./NavBarStyle.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

import Logo from "../../assets/img/drop-store115-small.png"

export default function NavBar(){
    return(
        <nav>
            <ul>
                    <Link to = "/"><img src={Logo} alt="logo" className="logo"/></Link>
                <li>
                    <NavLink className={({isActive}) => 
                    isActive ? 'active' : 'inactive' }
                    to="/category/jordan">JORDAN
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => 
                    isActive ? 'active' : 'inactive' }
                    to="/category/air">AIR
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => 
                    isActive ? 'active' : 'inactive' }
                    to= "/category/uppers" > UPPERS
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => 
                    isActive ? 'active' : 'inactive' }
                    to= "/category/pants">PANTS
                    </NavLink>
                </li>
                <li>
                    <Link to= "/Destacados"> UNDER 100 </Link>
                    
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}