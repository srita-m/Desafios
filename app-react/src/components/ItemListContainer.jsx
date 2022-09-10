import React, {useState, useEffect} from 'react';
import {ItemList} from './ItemList';
import {Productos} from './Productos';
import Loading from './Loading';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [ProductosList, setProductosList] = useState([])

const {categoria} = useParams()
  
const getProductos = () => new Promise((resolve, reject) => {
    if(categoria) {
        setTimeout(()=> resolve(Productos.filter(item => item.categoria === categoria)), 2000)
    }else{
           setTimeout(()=> resolve(Productos), 2000)
        }
    })       

useEffect(() => {
    getProductos()
.then(Productos => setProductosList(Productos))
    .catch(error => console.error(error))

    return () =>{
        setProductosList([])
    }
}, [categoria]) 

return (
    ProductosList.length ? <ItemList ProductosList={ProductosList}/> : <Loading/>
)
}

export default ItemListContainer