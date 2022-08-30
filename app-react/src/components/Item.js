import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';

function CPromesa (confirmacion){
    return new Promise((resolve, reject) => {
        if(confirmacion) {
            resolve(ItemList)
        } else {
            reject("No hay productos que mostrar")
        }
    })       
}

const Item = () =>{

const [Item, setItem] = useState([]);
useEffect(() => {
CPromesa(true)
.then(data => {
    const ItemCard = data.map((ItemList, indice) =>
    <div className="card border-secondary mb-3" key ={indice} style={{ maxWidth: "15rem", margin: "5px" }}>
    <div className="card-header">{ItemList.nombre}</div>
    <div className="card-body">
      <p className="card-text">Descripción:{ItemList.descripcion}</p>
      <p className="card-text">Precio:{ItemList.precio}</p>
      <p className="card-text">Stock:{ItemList.stock}</p>
    </div>
  </div>
    )
    console.log(ItemCard)
    setItem(ItemCard)
    })

    .catch(error => {
        console.error(error)
    })
}, []); 

    return (
        <div className='row'>
            {Item}
        </div>
    );

}
export default Item;
