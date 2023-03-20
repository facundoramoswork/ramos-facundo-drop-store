import "./style.css";
/* import { getFirestore, doc, getDocs, collection, query, where} from 'firebase/firestore';
import {useEffect , useState} from 'react';

const Destacados = () => {
      const [lista100, setLista100] = useState ([]);
      const db = getFirestore();
      const q= query(collection (db, 'Products'), where('precio', '<', 100));
      getDocs(q)
      .then((snapshot)=>{
        if(snapshot.size !== 0){
          console.log("encontre productos");
        
        const snapProduct =response.docs.map((doc)=>{ 
          return {
            id: doc.id, 
            ...doc.data(),
          }; setLista100(snapProduct)
          
      })
      .catch((error)=> {console.log(error)});

  return (
    <div className="100">
        <h1>DROP STORE DROP STORE DROP STORE DROP STORE DROP STORE DROP STORE DROP STORE</h1>
        <h2 className="subt">DESTACADOS DEL MES</h2>
        <div>
          
        </div>
    </div>
  )
}

export default Destacados */