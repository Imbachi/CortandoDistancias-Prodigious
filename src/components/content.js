import React from 'react'
import Carrusel from "./Carrusel"
import SloganContainer from './SloganContainer'
import ProductsContainer from './ProductsContainer'
export default function content(props) {
    return (
        <div>
            <Carrusel/>
            <SloganContainer qs={props.qs} ds={props.ds}/>
            <ProductsContainer/>
        </div>
    )
}
