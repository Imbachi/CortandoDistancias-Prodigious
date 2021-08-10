import React from "react";
import Contacto from "./Contacto";
import SocialMedia from "./SocialMedia";
import Map from "./Map";
import "./styles/foter.scss";

export default function Foter() {
  return (
    <div>
      <div className="foterContainer">
        <Contacto />
        <SocialMedia />
        <Map />
      </div>
      <div className="copy">&copy; 2021 Creado por equipo 4 + 1 con prodigious.com</div>
    </div>
  );
}
