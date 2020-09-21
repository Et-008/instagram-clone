import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavItems.css';

let navitems = (props) => {
    return (
        <ul className='NavItems'>
            <NavItem>Home</NavItem>
            <NavItem>Telegram</NavItem>
            <NavItem>Explore</NavItem>
            <NavItem>Hearts</NavItem>
            <NavItem>Profile</NavItem>
        </ul>
    )
}

export default navitems;