import {React, useState, useContext} from 'react'
import './Counter.css';
import './ItemDetail.css';
import {Link} from 'react-router-dom'
import { CartContexto } from '../contexto/CartContexto';


const ItemDetail = ({item}) => {
  const [cantidad, setCantidad]= useState(1);
  const {carrito, agregarProductoCarrito} =  (CartContexto);


 
  const AgregarCarrito = (item, cantidad) => {
  const ItemCarrito = {id:item.id, cantidad:cantidad}
  agregarProductoCarrito(ItemCarrito)
  console.log (carrito)
}
const cantidadItem = (operacion) => {
  if(operacion == "+") {
      if(cantidad < item.stock) {
          setCantidad(cantidad + 1)
      }
  } else {
      if(cantidad > 1) {
          setCantidad(cantidad - 1)
      }
  }
}

  return (
    <div>
        <div className="card-detail">
            <div className="card-detail-left">
                <img className="imgMax" src={item.img} alt={item.Title} />
            </div>
            <div className="card-detail-right">
            <h1>{item.Title}</h1>
                <p>{item.descripcion}</p>
                <p className="price">${item.precio}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria: {item.categoria}</p>
                <p> Cantidad:{cantidad}</p>
                <p>
                <button className='btn btn-outline-success'onClick={() => cantidadItem("+")}> + </button>
                <button className='btn btn-outline-success'onClick={() => cantidadItem("-")}> - </button>
                </p>
                <Link to='/cart'> 
                <button className='btn btn-outline-info' onClick={() => AgregarCarrito(item, cantidad)} >Comprar</button>
                </Link>
            <div>
            
            </div>
          
        </div>
    </div>
   
  
    </div>
  )
}

export default ItemDetail