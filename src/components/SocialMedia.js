import React from 'react'
import Logo from './Logo'
import {FaFacebookF, FaPinterestP, FaTwitter} from "react-icons/fa"
import "./styles/SocialM.scss"


export default function SocialMedia() {
    return (
        <div>
            <Logo/>
            <p className="socialTitle">Social Media</p>
            <div className="Socialicons">
                <a><FaFacebookF/></a>
                <a><FaPinterestP/></a>
                <a><FaTwitter/></a>
            </div>
        </div>
    )
}
