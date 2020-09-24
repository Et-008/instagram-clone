import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <div className='MainPage'>
                <div className='Feed'>
                    <header className='Status'>StatusBar</header>
                    <main className='Posts'>props.children</main>
                </div>
                <div className='SideContent'>
                    <aside>Content</aside>
                </div>
            </div>
        )
    }
}

export default Main;