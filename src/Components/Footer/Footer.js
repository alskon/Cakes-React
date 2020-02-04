import React from 'react'
import './Footer.css'

export default function () {
    return (
        <footer className='footer'>
            <p>tonik1409@yandex.ru <br/>
            +7 (988) 0100532 </p>
            <ul className='socialLink'>
            <li className='socialLinkInstagram'><a href='#'><img src='img/s_icons/instagram.png' alt='instagram'/></a></li>
            <li className='socialLinkVk'><a href='#'><img src='img/s_icons/vk.png' alt='VK'/></a></li>
            </ul>
            <p className='Copyright'>Разработано: AlSKon</p>
        </footer>
    )
}