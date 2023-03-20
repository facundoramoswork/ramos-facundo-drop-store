
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const {id} = useParams();
  const [detailView , setDetailView] = useState ({});
  
  const getDetails = () => {
    const database = getFirestore();
    const querySnapshot = doc (database, 'Products', id);

    getDoc(querySnapshot)
    .then((response)=>{
      setDetailView({
        id: response.id,
        ...response.data()
      });
    })
    .catch((error)=> console.log(error));
  }

  useEffect (() => {
    getDetails();
  }, 
  [])

  return (
    <div><ItemDetail detalle= {detailView} />
    </div>
  )
}

export default ItemDetailContainer