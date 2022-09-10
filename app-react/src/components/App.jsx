import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Nosotros from './Nosotros';



function App() {
  return (
   
    <BrowserRouter>
     <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
