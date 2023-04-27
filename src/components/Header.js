import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (

    <div className="Encabezado">

      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">Flower Fields</b></h1>
        <img className='Logo_Img' src='./img/Icono.png' alt='Textp'></img>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/" className="no-underline black">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/List" className="no-underline black">
                Mostrar_Flores
              </Link>
            </li>

            <li>
              <Link to="/create" className="no-underline black" >
                Guardar_Flores
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Header;