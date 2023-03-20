import "./ItemListContainerStyles.css";
import {Jordan} from '../../data/Jordan';
import {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import Destacados from "../Destacados/Destacados";
import { Form, useParams } from "react-router-dom";
import { Productos } from "../../data/Productos";
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";

function ItemListContainer(){
    const [listaJordan, setListaJordan] = useState ([]);
    const {categoryId} = useParams ();
    console.log(categoryId);


const bringMeProducts = ()=> {
    const database = getFirestore();
    const queryProducts = collection(database, 'Products');

    if (categoryId){
        const queryFilter = query(queryProducts, where('category', '==', categoryId));
    
    getDocs(queryFilter)
    .then((response) => {
        const productList = response.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data(),
            }
        });
        setListaJordan(productList);
        console.log(productList);
    })
    .catch((error)=>  console.log (error));
    
}else {getDocs(queryProducts)
    .then((response) => {
        const productList = response.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data(),
            }
        });
        setListaJordan(productList);
        console.log(productList);
    })
    .catch((error)=>  console.log (error));
    
};}

    useEffect (()=>{
        bringMeProducts();
    }, [categoryId])
    


    return (
        <div className="home">
            <ItemList listaJordan={listaJordan}/>
        </div>
        
    )
}

export default ItemListContainer;