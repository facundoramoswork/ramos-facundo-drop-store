import {HiOutlineShoppingBag} from "react-icons/hi";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidgetStyles.css";
import {Link} from 'react-router-dom';
function CartWidget(){
    const {cart} = useContext(CartContext);
    const  [total, setTotal] = useState(0);
    console.log(cart);

    useEffect (()=> {
        setTotal(cart.reduce((prev, curr)=> prev + curr.cantidad, 0))
    }
    ,[cart]);
    return(
        <Link to={'/cart'}>
        <div className="carrito">
            <HiOutlineShoppingBag/>
            {total}
        </div>
        </Link>
    );
}

export default CartWidget