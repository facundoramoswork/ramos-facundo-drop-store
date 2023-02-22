import {HiOutlineShoppingBag} from "react-icons/hi";
import "./CartWidgetStyles.css";
export default function CartWidget(){
    return(
        <div className="carrito">
            <HiOutlineShoppingBag/>
            {7}
        </div>
    );
}