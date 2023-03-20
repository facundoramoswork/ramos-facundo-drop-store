import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";


const CartProvider = ({children}) => {
    /* defino un useState como array vacio para almacenar luego los datos enviados y visualizarlos en la app */
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(cart.reduce((acc, curr)=> acc + curr.precio * curr.cantidad , 0)
    )}, [cart]);

    const addItem = (item, cantidad)=> {
        const isInCart = (id)=> {
            if(cart.find((product)=> product.id === id)){
                console.log(isInCart)
                return true ;
            }else {
                return false;
            }
        }
        
        if(isInCart(item.id)){
            const cartMap = cart.map((product)=>{
                if (product.id === item.id){
                    product.cantidad = product.cantidad + cantidad
                    return product
                }else {
                    return product
                }
            })
            setCart(cartMap);
        }else {
            const product = {
                id: item.id,
                name: item.name,
                descripcion: item.descripcion,
                color: item.color,
                precio: item.precio,
                genero: item.genero,
                stock: item.stock,
                category: item.category,
                imagen: item.imagen,
                cantidad: cantidad
            };
            console.log(product);
            setCart([...cart, product]);
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