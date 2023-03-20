import "./style.css";

const Item = ({lista}) => {
  return (
    <div className="item">
        <div className="img">
            <img alt={lista.descripcion} src={`/img/${lista.imagen}`} />
        </div>
        <h2>{lista.name}</h2>
        <p>$ {lista.precio}</p>
        <h3> Color: {lista.color}</h3>
        <h3> Género: {lista.genero}</h3>
        <h4> Nos quedan: {lista.stock}</h4>
    </div>
  )
}

export default Item