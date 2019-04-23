import React, { Component } from 'react';
import Screensaver from './Screensaver';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <Screensaver />
            </div>
        );
    }
}

export default App;
