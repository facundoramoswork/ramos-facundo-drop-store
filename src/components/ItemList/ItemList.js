import Item from "../Item/Item";
import "./style.css";
import { Link } from "react-router-dom";


const ItemList = ({listaJordan}) => {
    console.log(listaJordan)
  return (
    <div className="itemList">
        {listaJordan.map((lista)=> (
            <div key={lista.id}>
                <Link to={`/item/${lista.id}`} >
                <Item lista={lista}/> </Link>
            </div>
        ))
    }
    </div>
  )
}

export default ItemList