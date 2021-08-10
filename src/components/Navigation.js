import React from "react";
import "../pages/sass/style.scss";
import { GiShoppingCart } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

export default function Navigation(props) {
  return (
    <div>
      <div className="nav-container">
        <header>
          <a href="" className="logo">
            {props.titulo}
          </a>
          <nav>
            <ul>
              <li>
                <a href="">{props.nav1}</a>
              </li>
              <li>
                <a href="">{props.nav2}</a>
              </li>
              <li>
                <a href="">{props.nav3}</a>
              </li>
            </ul>
          </nav>
          <div className="icons-container">
            <a href="" className="carrito">
              <GiShoppingCart />
            </a>
            <a href="" className="perfil">
              <FaUserCircle />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
