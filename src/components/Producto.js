import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import "./styles/producto.scss";

export default function Producto() {
  return (
    <div className="cardContainer">
      <div className="detailproduct">
        <p className="producname">picnic</p>
        <ul>
            <li>$ 12.000 </li>
            <li><a href=""><GiShoppingCart/></a></li>
        </ul>
      </div>
      <img
        src="https://foodandtravel.mx/wp-content/uploads/2016/03/shutterstock_185031503.jpg"
        alt=""
        className="productImage"
      />
      <p className="detail">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
        eos!
      </p>
    </div>
  );
}
