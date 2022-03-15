import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(){
    return (
      <header className="header">
        <nav className="nav">
          <div className="nav__img">
            <button className="nav-toggle" aria-label="Abrir menú">
              <FontAwesomeIcon icon = {faBars} />
            </button>
            <div className="nav-menu-item logo">
              <a href="#" className="nav-menu-link nav-link">
                BattleSpeedCars
              </a>
            </div>
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
              <li className="nav-menu-item play">
                <a href="#" className="nav-menu-link nav-link">
                  Play
                </a>
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