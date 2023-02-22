
import { useParams } from "react-router-dom"
import { Productos } from "../../data/Productos";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
  const {id} = useParams();
  const [detailView , setDetailView] = useState ({});
  const giveMeDetails = new Promise ((resolve, reject) => {
    setTimeout (() => {
    const detalleProducto = Productos.find (item => item.id == id);
    console.log(detalleProducto);
    resolve(detalleProducto)
  }, 1000)} 
  );

  useEffect ( () => {
    giveMeDetails
    .then(response => {console.log(response);
    setDetailView(response);
    })
    .catch ((error) => {console.log(error)
    });
  }, 
  [])
  return (
    <div><ItemDetail detalle= {detailView} />
    </div>
  )
}

export default ItemDetailContainer