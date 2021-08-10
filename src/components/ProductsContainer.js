import React from "react";
import "./styles/productconta.scss"
import Producto from "./Producto";


export default function ProductsContainer() {
  return (
    <div>
      <p className="categorias">CATEGORIAS</p>
      <ul className="catlist">
          <li> <a href=""> MONTAJES</a></li>
          <li> <a href=""> DESAYUNOS</a></li>
          <li> <a href=""> FLORES</a></li>
          <li> <a href=""> REGALOS</a></li>
      </ul>
      <div className="productsContainer">
        <Producto/>
        <Producto/>
        <Producto/>
        <Producto/>
        <Producto/>
      </div>
    </div>
  );
}
