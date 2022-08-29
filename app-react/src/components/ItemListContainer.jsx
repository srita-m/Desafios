import './ItemListContainer.css';
import React from 'react';
import Counter from './Counter';

const ItemListContainer = () => {
    function agregar(count) {
        console.log(`Usted tiene ${count} productos`)
    }

    return (
   <div>
    <h1>Bienvenid@</h1>
    <Counter stock={12} agregar={agregar}/>
   </div>
    )
}

export default ItemListContainer
