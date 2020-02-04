import React from 'react'
import NavList from './NavList/NavList'

import './Nav.css'

export default function Nav () {
    const navMenu = [
        {id:1, menuName:'О нас' ,link: '#', img:''}, {id:2, menuName:'Продукция' ,link: '#',img:''}, 
        {id:3, menuName:'' ,link: '#',img:'../../../img/logo.svg'},
        {id:4, menuName:'Акции' ,link: '#',img:''}, {id:5, menuName:'Контакты' ,link: '#',img:''}
    ];
    const menuItem = navMenu.map(menuItem=> <NavList key = {menuItem.id} linkMenu={menuItem.link} menuItem={menuItem.menuName} img={menuItem.img} />);

    return (
        <ul className='navigation'> {menuItem} </ul>
    )
}