import "./style.css" ;

const ItemDetail = ({detalle}) => {
  return (
    <div className="detalle">
        <div className="detallebox">
        <img src={detalle.imagen} alt= {detalle.descripcion}/>
        <h1> $ {detalle.precio}</h1>
        <h2>{detalle.name}</h2>
        <p>{detalle.descripcion}</p>
        <h3> GÉNERO: {detalle.genero}</h3>
        <h3>CATEGORÍA: {detalle.category}</h3>
        <h4>UNIDADES EN STOCK: {detalle.stock}</h4>
        </div>
    </div>
  )
}

export default ItemDetail