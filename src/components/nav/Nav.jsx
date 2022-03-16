import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import imgCoin from "./img/coin.png"

function Nav(){
    return (
      <header className="header">
        <div className='logoOculto'>
          <p>Speed Battle Cars</p>
        </div>
        <nav className="nav">
          <div className="nav__img">
            <button className="nav-toggle" aria-label="Abrir menú">
              <FontAwesomeIcon icon = {faBars} />
            </button>
            <ul className="navVisible nav-menu">
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link nav-link">
                  Home
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link nav-link">
                  Models
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link nav-link">
                  User
                </a>
              </li>
              <li className="nav-menu-item nav2" >
                  <div className='coin'>
                    <img src={imgCoin} alt="coin" />
                  </div>
                  <div className='contadorCoin'>1000</div>
                  <div className='play'>
                    <a href="#" className="nav-menu-link  nav-link"> Play </a>
                  </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Nav;

/* const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
}); */