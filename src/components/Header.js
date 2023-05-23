import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { AUTH_TOKEN } from "./constants";

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

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
            <li>
              <Link to="/text-davinci-003" className="no-underline black">
                ObjetosIA
              </Link>
            </li>
            <li>
              <Link to="/imagenia" className="no-underline black">
                ImagenesIA
              </Link>
            </li>
            <li>
              <Link to="/search" className="ml1 no-underline black">
                search
              </Link>
            </li>
            <li>
              {authToken && (
                <Link to="/login" className="ml1 no-underline black">
                  Inicia Sesión
                </Link>
              )}
              <div className="flex flex-fixed">
                {authToken ? (
                  <div
                    className="ml1 pointer black"
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN);
                      navigate(`/`);
                    }}
                    style={{ color: "white" }}
                  >
                    Cerrar Sesión
                  </div>
                ) : (
                  <Link to="/login" className="ml1 no-underline black">
                    Inicia Sesión
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
