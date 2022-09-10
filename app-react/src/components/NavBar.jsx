import React from 'react';
import {Link} from 'react-router-dom'
import Form from './form';
import CardWidget from './CardWidget';


const NavBar = () => {
    return (
        <div>
                <div className="">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" href="#">El Gabinete de curiosidades</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
      <Link to='/'>
        <li className="nav-link">
        Home
        </li>
        </Link>
        <Link to='/nosotros'>
        <li className="nav-link">
       Nosotros
        </li>
        </Link>
        <Link to='/categoria'>
        <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
       Categorias
        </li>
        <li className="nav-item dropdown">
          <div className="dropdown-menu">
            <Link className="dropdown-item" to='/categoria/Bebidas-Frias'>Bebidas frias</Link>
            <Link className="dropdown-item" to='/categoria/Bebidas-Calientes'>Bebidas Calientes</Link>
            <Link className="dropdown-item" to='/categoria/Casa'>Casa</Link>
          </div>
        </li>
        </Link>
      </ul>
      
      <Form contBuscar ="Productos"/>
      <CardWidget/>

    </div>
  </div>
</nav>

    </div>
        </div>
    );
}

export default NavBar;
