import React from 'react'
import Iframe from "react-iframe"


export default function Map() {
    return (
        <div>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15904.78817975124!2d-74.0417624!3d4.7358025999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1628402079371!5m2!1ses!2sco"
                width="500px"
                height="300px"
            />
        </div>
    )
}
