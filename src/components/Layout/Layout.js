import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'

let layout = (props) => {
    return (
    <Aux>
        <Toolbar />
        <div className='MainPage'>
            <div className='Feed'>
                <header className='Status'>Status</header>
                <main className='Posts'>props.children</main>
            </div>
            <div className='SideContent'>
                <aside>Content</aside>
            </div>
        </div>
    </Aux>
    )
}

export default layout;