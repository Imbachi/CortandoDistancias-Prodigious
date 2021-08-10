import React from 'react'
import Slogan from "./Slogan"
import Logo from './Logo'
import Opinion from './Opinion'
import "./styles/SloganCon.scss"
export default function SloganContainer(props) {
    return (
        <div className="SloganContainer">
            <Slogan qs={props.qs} ds={props.ds}/>
            <Logo/>
            <Opinion/>
        </div>
    )
}
