import {React, useState} from 'react'
import './Counter.css';

const Counter = ({stock, agregar}) => {
    const [count, setCount] = useState(0);

        function sumar() {
            if (count < stock){
            setCount(count + 1)
        }
    }

        function restar() {
            if (count > 0){
            setCount(count - 1)
            }
        }

        function vaciar(){
            setCount(0)
        }

    return (
        <div>
            <div>
                <button className='btn btn-outline-success' onClick={sumar}> + </button>
                <button className='btn btn-outline-success' onClick={vaciar}> Vaciar </button>
                <button className='btn btn-outline-success' onClick={restar}> - </button>
            </div>
            <div>
                <button className='btn btn-outline-info' onClick={() => agregar(count)}>Comprar</button>
            </div>
            
        </div>
    )
}

export default Counter;
