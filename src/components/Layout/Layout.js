import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Main from '../../containers/Main/Main'
import './Layout.css'

let layout = (props) => {
    return (
    <Aux>
        <Toolbar />
        <Main />
        
    </Aux>
    )
}

export default layout;