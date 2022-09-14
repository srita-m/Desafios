import React, {createContext, useState} from 'react';
import { Productos } from '../components/Productos';

const CartContexto = createContext()

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (item) => {
        const ACarrito = carrito
        ACarrito.push(Productos)
        setCarrito(ACarrito)
    }

    const quitarProductoCarrito = (item) => {
        const ACarrito = carrito
        let indice = ACarrito.findIndex(item => item.id === item.id)
        ACarrito.splice(indice, 1)
        setCarrito(ACarrito)
    }
    return (
        <>
            <CartContexto.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
                    {props.children}
            </CartContexto.Provider>
        </>
    );
}

export {CartContexto, CartProvider};
