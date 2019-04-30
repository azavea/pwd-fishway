import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import Navbar from './Navbar';
import Screensaver from './Screensaver';

class App extends Component {
    render() {
        const { isScreensaverVisible } = this.props;
        const app = isScreensaverVisible ? (
            <Screensaver />
        ) : (
            <div>
                <Navbar />
            </div>
        );
        return <div className='App'>{app}</div>;
    }
}

App.propTypes = {
    isScreensaverVisible: bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isScreensaverVisible: state.isScreensaverVisible,
    };
}
export default connect(mapStateToProps)(App);
