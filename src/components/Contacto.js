import React from 'react'
import {ImLocation} from "react-icons/im"
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import "./styles/Contacto.scss"

export default function Contacto() {
    return (
        <div>
            <p className="contact">CONTACTANOS</p>
            <p> <ImLocation /> Bogotá, Cedritos. Cra 18A # 150-13</p>
            <p> <FaPhoneAlt/> +53 (302) 268 4086</p>
            <p> <GrMail/> info@cortandodistancias.com</p>
        </div>
    )
}
