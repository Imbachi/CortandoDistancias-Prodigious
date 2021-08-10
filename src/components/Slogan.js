import React from 'react'
import "./styles/slogan.scss"
export default function Slogan(props) {
    return (
        <div>
            <h1>{props.qs}</h1>
            <p>{props.ds}</p>
        </div>
    )
}
