import React from 'react';
import './Toolbar.css'
import NavItems from '../NavItems/NavItems'

let toolbar = (props) => {
    return (
        <div className='Toolbar'>
            <div>Home</div>
            <input type='text' />
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default toolbar;