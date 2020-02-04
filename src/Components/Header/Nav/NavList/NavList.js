import React from 'react'
import './NavList.css'

export default function NavList(props) {
    return (
        <div className='navList'>
        {props.menuItem ? <li><a href={props.linkMenu}>{props.menuItem}</a></li> : 
        props.img ? <li> <img src={props.img} alt='pic' /> </li> : '' }  
        </div>
                
    )
}