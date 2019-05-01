import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import Navbar from './Navbar';
import Screensaver from './Screensaver';
import GlobalStyle from './globalStyle';

class App extends Component {
    render() {
        const { isScreensaverVisible } = this.props;
        const app = isScreensaverVisible ? <Screensaver /> : <Navbar />;
        return (
            <div className='App'>
                <GlobalStyle />
                {app}
            </div>
        );
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
