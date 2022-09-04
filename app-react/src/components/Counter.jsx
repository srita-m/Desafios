import {React, useState} from 'react'
import ItemList from './ItemList';
import './Counter.css';

const Counter = ({stock, agregar}) => {
    const [count, setCount] = useState(0);

        function sumar() {
            if (count < stock){
            setCount(count + 1)
        }
    }

        function restar() {
            if (count > 1){
            setCount(count - 1)
            }
        }

        function vaciar(){
            setCount(0)
        }

    return (
        <div>
            <div className='card bg-secondary mb-3'>
                <h1>Producto</h1>
                <p>En stock: {stock}</p>
                <p>Cantidad: {count}</p>
           

            <div>
                <button className='btn btn-outline-success' onClick={sumar}> + </button>
                <button className='btn btn-outline-success' onClick={vaciar}> Vaciar </button>
                <button className='btn btn-outline-success' onClick={restar}> - </button>
            </div>
            <div>
                <button className='btn btn-outline-info' onClick={() => agregar(count)}>Comprar</button>
            </div>
            </div>
            
        </div>
    )
}

export default Counter;
