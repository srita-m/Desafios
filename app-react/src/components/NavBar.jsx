import React from 'react';
import Form from './form';
import CardWidget from './CardWidget';

const NavBar = () => {
    return (
        <div>
                <div className="">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
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
