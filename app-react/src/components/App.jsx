import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import ItemDetail from './ItemDetail';
import Nosotros from './Nosotros';
import { CartProvider } from '../contexto/CartContexto';



function App() {
  return (
   <CartProvider>
    <BrowserRouter>
     <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/cart' element={<ItemDetail/>}/>
    </Routes>
    </>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
