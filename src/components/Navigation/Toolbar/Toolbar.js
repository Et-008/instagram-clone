import React from 'react';
import './Toolbar.css'
import NavItems from '../NavItems/NavItems'
//import SearchIcon from '../../../assets/Search.png'

let toolbar = (props) => {
    return (
        <div className='Toolbar'>
            <div>Home</div>
            <input type='text' placeholder='search'></input>
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default toolbar;