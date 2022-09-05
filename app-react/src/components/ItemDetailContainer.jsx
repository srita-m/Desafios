import React, { useEffect, useState } from 'react'
import {Productos} from './Productos'
import { ItemDetail } from './ItemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()

    const getProductos = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(Productos.find(Productos => Productos.id === 1)), 2000)
      })


    useEffect(() => {
      getProductos()
      .then(response => setItem(response))
    }, [])
  
    
    return (
      <>
        {
          item ? <ItemDetail item={item}/> : <h1>Procesando...</h1>
        }
      </>
  )
}