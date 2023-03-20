import "./style.css" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({detalle}) => {
  const  navigateTo = useNavigate();
  const [count, setCount] = useState(0);
  const {addItem} = useContext(CartContext);

/*   const addToCart = (e)=> {
    e.preventDefault();
    console.log({...detalle, cantidad: count});
  } */
  return (
    <div className="detalle">
        <div className="detallebox">
        <img src={`/img/${detalle.imagen}`} alt= {detalle.name}/>
        <h1> $ {detalle.precio}</h1>
        <h2>{detalle.name}</h2>
        <p>{detalle.descripcion}</p>
        <h5> ID del producto: {detalle.id}</h5>
        <h3> GÉNERO: {detalle.genero}</h3>
        <h3>CATEGORÍA: {detalle.category}</h3>
        <h4>UNIDADES EN STOCK: {detalle.stock}</h4>
        <ItemCount count={count} setCount={setCount}/>
        <button disabled={ count === 0 } onClick={()=> addItem(detalle, count)}>Agregar a mi carrito</button>
        <button onClick={ ()=> navigateTo ('/')}>Seguir comprando en el sitio</button>
        <button onClick={()=> navigateTo ('/cart')}>Finalizar mi compra</button>
        </div>
    </div>
  )
}

export default ItemDetail