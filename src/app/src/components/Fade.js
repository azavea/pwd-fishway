/*
    Adapted from the React-Bootstrap built-in Fade transition
    https://github.com/react-bootstrap/react-bootstrap/blob/v1.0.0-beta.8/src/Fade.js
*/

import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition, {
    ENTERED,
    ENTERING,
} from 'react-transition-group/Transition';
import onEnd from 'dom-helpers/transition/end';

const propTypes = {
    /**
     * Show the component; triggers the fade in or fade out animation
     */
    in: PropTypes.bool,

    /**
     * Wait until the first "enter" transition to mount the component (add it to the DOM)
     */
    mountOnEnter: PropTypes.bool,

    /**
     * Unmount the component (remove it from the DOM) when it is faded out
     */
    unmountOnExit: PropTypes.bool,

    /**
     * Run the fade in animation when the component mounts, if it is initially
     * shown
     */
    appear: PropTypes.bool,

    /**
     * Duration of the fade animation in milliseconds, to ensure that finishing
     * callbacks are fired even if the original browser transition end events are
     * canceled
     */
    timeout: PropTypes.number,

    /**
     * Callback fired before the component fades in
     */
    onEnter: PropTypes.func,
    /**
     * Callback fired after the component starts to fade in
     */
    onEntering: PropTypes.func,
    /**
     * Callback fired after the has component faded in
     */
    onEntered: PropTypes.func,
    /**
     * Callback fired before the component fades out
     */
    onExit: PropTypes.func,
    /**
     * Callback fired after the component starts to fade out
     */
    onExiting: PropTypes.func,
    /**
     * Callback fired after the component has faded out
     */
    onExited: PropTypes.func,
};

const defaultProps = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: true,
    appear: true,
};

const fadeStyles = {
    [ENTERING]: 'show',
    [ENTERED]: 'show',
};

function triggerBrowserReflow(node) {
    node.offsetHeight; // eslint-disable-line no-unused-expressions
}

class Fade extends Component {
    handleEnter = node => {
        triggerBrowserReflow(node);
        if (this.props.onEnter) this.props.onEnter(node);
    };

    render() {
        const { className, children, ...props } = this.props;

        return (
            <Transition
                addEndListener={onEnd}
                {...props}
                onEnter={this.handleEnter}
            >
                {(status, innerProps) =>
                    React.cloneElement(children, {
                        ...innerProps,
                        className: classNames(
                            'fade',
                            className,
                            children.props.className,
                            fadeStyles[status]
                        ),
                    })
                }
            </Transition>
        );
    }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
