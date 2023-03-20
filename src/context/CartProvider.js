import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";


const CartProvider = ({children}) => {
    /* defino un useState como array vacio para almacenar luego los datos enviados y visualizarlos en la app */
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(cart.reduce((acc, curr)=> acc + curr.precio * curr.cantidad , 0)
    )}, [cart]);

    const addItem = (product, cantidad)=> {
        const isInCart = (id)=> {
            if(cart.find((product)=> product.id === id)){
                console.log(isInCart)
                return true ;
            }else {
                return false;
            }
        }
        if(isInCart(product.id)){
            const cartMap = cart.map((product)=>{
                if (product.id === item.id){
                    product.cantidad + cantidad
                    return product
                }else {
                    return product
                }
            })
            setCart(cartMap);
        }else {
            const item = {
                id: product.id,
                name: product.name,
                descripcion: product.descripcion,
                color: product.color,
                precio: product.precio,
                genero: product.genero,
                stock: product.stock,
                category: product.category,
                imagen: product.imagen,
                cantidad: cantidad
            };
            console.log(item);
            setCart([...cart, item]);
            }
        }

        const clearCart = ()=>{
            setCart([]);
        }

        const removeProduct = (id)=> {
            setCart(cart.filter((product)=> product.id !== id));
        }

    return (
    <CartContext.Provider value={{cart, addItem, clearCart, removeProduct, total}}>{children}</CartContext.Provider>
    )
    }


export default CartProvider