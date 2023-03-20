/* import { doc, Firestore } from "firebase/firestore"; */
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { getFirestore, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import "./styles.css";

const Cart = () => {
    const {cart, clearCart, removeProduct, total } = useContext(CartContext);
    const [newCart, setnewCart] = useState([]);
    const [formValue,setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const db = getFirestore();

    const createOrder = () => {
        const querySnap = collection ( db, 'Orders');
        addDoc(querySnap, {
            buyer : {
                email : formValue.email ,
                password: formValue.password,
                name : formValue.name ,
                phone: formValue.phone
            },
            products: cart.map((product)=> {
                return {
                    name: product.name,
                    precio: product.precio,
                    id: product.id, 
                    cantidad: product.cantidad
                }
            }),
            total: total
        })
        .then((res)=>{
            alert(`Se ha creado la orden con el ID  + ${res.id}   `);
            updateStock();
            setnewCart([]);
        })
        .catch((error)=> console.log(error));
    };

    const updateStock = () => {
        cart.forEach(product => {
            const querySnapshot = doc (db, 'Products', product.id);
        
        updateDoc(querySnapshot, {
            stock: product.stock - product.cantidad
        })
        .then(()=>{ alert("Gracias por su compra")})
        .catch((error)=> {console.log(error)})
    });
};

    const handleInputs = (e)=> {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <div>
            {cart.map((product)=>(
            <div key={product.name} className="cart">
                <h1>{product.name}</h1>
                <h2>{product.cantidad} UNIDADES</h2>
                <h2>${product.precio}</h2>
                <img src={`/img/${product.imagen}`} alt={product.name}/>
                <h5>ID No: {product.id}</h5>
                <button onClick={() => removeProduct(product.id)}>QUITAR</button>
            </div>
        ))};
            {cart.length > 0  && 
                <div className="btnVaciado">
                    <h3> TOTAL DE SU COMPRA: $ {cart.reduce((acc, curr)=> acc + curr.precio * curr.cantidad, 0)} </h3>
                    <button onClick={clearCart}>VACIAR EL CARRITO</button>
                </div>}
            {cart.length > 0 && 
                <div className="cartInputs">
                    <h3>INICIA SESION DEBAJO PARA REALIZAR TU ORDEN DE COMPRA EN EL SITIO</h3>
                    <form>
                        <input name="name" type="text" placeholder="NOMBRE" value={formValue.name} required onChange={handleInputs}/>
                        <input name="email" type="email" placeholder="ejemplo@ejemplo.com" value={formValue.email} required onChange={handleInputs}/>
                        <input name="password" type="password" placeholder="PASSWORD" value={formValue.password} onChange={handleInputs}/>
                        <input name="phone" type="text" placeholder="SU TELEFONO" value={formValue.phone} onChange={handleInputs}/> 
                    </form>
                    <button disabled={formValue.email === '' || null } onClick={createOrder} >COMPLETAR MI COMPRA</button>
                </div>
            }
            </div>

        {cart.length === 0  &&(

                <h3 className="cartVacio">TU CARRITO SE ENCUENTRA VACIO</h3>
        )}
        </div>
    )
}

export default Cart