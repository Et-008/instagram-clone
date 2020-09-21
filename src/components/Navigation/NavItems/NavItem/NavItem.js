import React from 'react';
import './NavItem.css'

let navitem = (props) => {
    return (
        <li className='NavItem'><a>{props.children}</a></li>
    )
}

export default navitem;