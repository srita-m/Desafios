import React from 'react';
import {ItemCard} from './ItemCard';

export const ItemList = ({ProductosList}) =>{
   

    return (
        <div style={{display: 'flex', gap: '2rem'}}>
            {
            ProductosList.map(Item => <ItemCard key={Item.id} Item={Item}/>)
            }
        </div>
)
}

