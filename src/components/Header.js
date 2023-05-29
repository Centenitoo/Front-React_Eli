import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { AUTH_TOKEN } from "./constants";
import LanguageSelect from "./languageSelect";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="Encabezado">
      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">{t("Flower Fields")}</b></h1>
        <img className='Logo_Img' src='./img/Icono.png' alt='Textp'></img>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/" className="no-underline black">
                {t("Inicio")}
              </Link>
            </li>

            <li>
              <Link to="/List" className="no-underline black">
                {t("Mostrar_Flores")}
              </Link>
            </li>

            <li>
              <Link to="/create" className="no-underline black" >
                {t("Guardar_Flores")}
              </Link>
            </li>
            <li>
              <Link to="/text-davinci-003" className="no-underline black">
                {t("ObjetosIA")}
              </Link>
            </li>
            <li>
              <Link to="/imagenia" className="no-underline black">
                {t("ImagenesIA")}
              </Link>
            </li>
            <li>
              <Link to="/search" className="ml1 no-underline black">
                {t("search")}
              </Link>
            </li>
            <li>
              {authToken && (
                <Link to="/login" className="ml1 no-underline black">
                  {t("Inicia Sesión")}
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
                    {t("Cerrar Sesión")}
                  </div>
                ) : (
                  <Link to="/login" className="ml1 no-underline black">
                    {t("Inicia Sesión")}
                  </Link>
                )}
              </div>
            </li>

            <li>
              <div className="flex flex-fixed">
                <div style={{ color: "white" }} className="ml1 pointer black">{t("Selecciona un lenguaje")}</div>
                <div className="ml1 pointer black"> : </div>

                <div>
                  <LanguageSelect className="ml1 pointer black" />
                </div>
              </div>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
