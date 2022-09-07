import React, { useEffect, useState } from 'react'
import {Productos} from './Productos'
import { ItemDetail } from './ItemDetail'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
  const {id} = useParams()
  console.log(id)

    const [item, setItem] = useState()

    const getProductos = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(Productos.find(Productos => Productos.id === Number(id))), 2000)
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

export default ItemDetailContainer