import React, {useState, useEffect} from 'react';
import {ItemList} from './ItemList';
import {Productos} from './Productos';
import './ItemListContainer.css';


export const ItemListContainer = () => {
    const [ProductosList, setProductosList] = useState([])
  
const getProductos = () => new Promise((resolve, reject) => {
           setTimeout(()=> resolve(Productos), 2000)
    })       

useEffect(() => {
    getProductos()
.then(Productos => setProductosList(Productos))
    .catch(error => console.error(error))
}, []) 

return (
    <ItemList ProductosList={ProductosList}/>
)
}

