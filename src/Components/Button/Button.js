import React from 'react'
import './Button.css'

export default function Button (props) {
    return ( 
    <div className='btnPrevNext' onClick={props.onClick}>
        <a>{props.children}</a>
        </div>   
    )
}