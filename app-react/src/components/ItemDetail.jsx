import {React, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import { CartContexto } from '../contexto/CartContexto';
import './Counter.css';

const ItemDetail = ({item}) => {
  const [cant, setCant] = useState(1);
  const {carrito, agregarProductoCarrito} =  useContext(CartContexto);
  const carritoCant= (operacion) => {
  if (operacion == "+") {
      if (cant < item.stock) {
          setCant(cant + 1)
      } else {
          if (cant > 1) {
              setCant(cant - 1) 
      }
  }
}

const AgregarCarrito = (item, cant) => {
  const ItemCarrito = {id:item.id, cantidad:cant}
  agregarProductoCarrito(ItemCarrito)
  console.log(carrito)
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
                <button className='btn btn-outline-success' onClick={() =>carritoCant("+")}> + </button>
                <button className='btn btn-outline-success' onClick={() =>carritoCant("-")}> - </button>
                <p>Cantidad:{cant}</p>
            <input type="number" placeholder='cantidad' onChange={setCant()}/>
            <Link to='/cart'>
                <button className='btn btn-outline-info' onClick={() => AgregarCarrito(item, cant)} >Comprar</button>
            </Link>
               
            <div>
            
            </div>
          
        </div>
    </div>
   
  
    </div>
  )
}
}

export default ItemDetail