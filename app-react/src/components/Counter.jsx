import {React, useState} from 'react'
import './Counter.css';

const Counter = ({item}) => {
    const [count, setCount] = useState(0);

        const agregarCarrito = (item, count) => {
            const ItemCarrito = {id:item.id, cantidad:count}
            console.log(ItemCarrito)
            }

        const countItem = (operacion) => {
        if (operacion == "+") {
            if (count < item.stock) {
                setCount(count + 1)
            } else {
                if (count > 1) {
                    setCount(count - 1) 
            }
        }
    }

    return (
        <div>
            <div>
                <button className='btn btn-outline-success' onClick={() => countItem("+")}> + </button>
                <button className='btn btn-outline-success' onClick={() => countItem("-")}> - </button>
                <p>Cantidad:{count}</p>
            </div>
            <div>
                <input type="number" placeholder='cantidad' onChange={setCount()}/>
                <button className='btn btn-outline-info' onClick={() => agregarCarrito(item, count)}>Comprar</button>
            </div>
            
        </div>
    )
}
}
export default Counter;
