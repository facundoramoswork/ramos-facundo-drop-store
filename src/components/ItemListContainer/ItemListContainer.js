import "./ItemListContainerStyles.css";
import {Jordan} from '../../data/Jordan';
import {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import Destacados from "../Destacados/Destacados";
import { useParams } from "react-router-dom";
import { Productos } from "../../data/Productos";

export default function ItemListContainer(){
    const [listaJordan, setListaJordan] = useState ([]);
    const {categoryId} = useParams ();
    console.log(categoryId);
    const searchProducts = new Promise( (resolve, reject) => {
        if (categoryId){
            const filtrarProductos = Productos.filter((item) => item.category === categoryId);
            setTimeout(()=> {
            resolve(filtrarProductos)
        }, 2000) ;
    }else  {
        setTimeout (()=> {
            resolve(Productos);
        }, 2000);
    }
});


    useEffect (()=>{
        searchProducts
        .then((response)=>{
            setListaJordan(response);
        }).catch((error)=>{
            console.log(error);
        })
    }, [categoryId])
    


    return (
        <div className="home">
            <ItemList listaJordan={listaJordan}/>
        </div>
        
    )
}