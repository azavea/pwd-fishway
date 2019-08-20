import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Heading } from './custom-styled-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setBackgroundPosition, setActiveTab } from '../actions';
import About from './About';
import SeeTheFishway from './SeeTheFishway';
import MeetTheFish from './MeetTheFish';
import QuizHome from './QuizHome';
import Fade from './Fade';
import { ABOUT, SEE, MEET, TEST, POSITIONS } from '../util/constants';

const TestHeading = styled(Heading)`
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
`;

const StyledTabs = styled(Tabs)`
    height: 5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.bordercolor};
    transition: border-color 1s 0.25s ease-in;

    .nav-item {
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: flex-end;
        transition: opacity 0.75s ease-in;

        span {
            margin-bottom: 0;
            line-height: 1.5;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -25px;
            height: 2px;
            background: right center / 250%;
            background-image: linear-gradient(
                to right,
                ${props => props.theme.gleft} 0 20%,
                ${props => props.theme.gright} 25% 50%,
                transparent 50% 100%
            );
            border-radius: 2px;
            opacity: 0;
            transition: background-position 0.25s ease-in,
                background-image 1s 0.25s ease-in, opacity 0.25s 0.05s ease-in;
        }

        &[data-rb-event-key='testYourSkills']::after {
            bottom: -21px;
        }
    }

    ${Heading} {
        color: ${props => props.theme.color};
        transition: color 1s 0.25s ease-in;
    }

    ${TestHeading} {
        color: ${props => props.theme.testcolor};
        transition: color 1s 0.25s ease-in;
    }

    .nav-item:focus {
        outline: none;
    }

    .active span,
    .active svg {
        opacity: 1;
    }

    .active::after {
        background-position: left center;
        opacity: 1;
    }
`;

const StyledNavbar = styled.div`
    display: ${props => props.hide};
`;

const theme = {
    gleft: '#d1f0f3',
    gright: '#E7FDFF',
    bordercolor: 'rgba(256, 256, 256, 0.2)',
    color: 'white',
    testcolor: '#e9f563',
};

const invertedTheme = {
    gleft: '#93b7d1',
    gright: '#93b7d1',
    bordercolor: '#add8dc',
    color: '#041820',
    testcolor: '#041820',
};

const Navbar = ({ dispatch, activeTab, isQuizVisible }) => {
    const titles = {
        [ABOUT]: (
            <Heading as='span' variant='xSmall' opacity='0.8'>
                <FontAwesomeIcon
                    icon={['fas', 'info-circle']}
                    pull='left'
                    opacity='0.8'
                    size='lg'
                />
                About
            </Heading>
        ),
        [SEE]: (
            <Heading as='span' variant='xSmall' opacity='0.8'>
                <FontAwesomeIcon
                    icon={['fas', 'video']}
                    pull='left'
                    opacity='0.8'
                    size='lg'
                />
                See the Fishway
            </Heading>
        ),
        [MEET]: (
            <Heading as='span' variant='xSmall' opacity='0.8'>
                <FontAwesomeIcon
                    icon={['fas', 'fish']}
                    pull='left'
                    opacity='0.8'
                    size='lg'
                />
                Meet the Fish
            </Heading>
        ),
        [TEST]: (
            <TestHeading as='span' variant='small' opacity='0.8'>
                <FontAwesomeIcon
                    icon={['far', 'bullseye-pointer']}
                    pull='left'
                    size='lg'
                />
                Test your Skills
            </TestHeading>
        ),
    };

    /* force un/mount tab views so that tab state resets upon revisit
    this is most critical for the About tab to restart videos upon re/visit
    React Bootstrap built-in un/mount for tabs breaks transitions */
    const tab = (key, component) => (
        <Tab eventKey={key} title={titles[key]}>
            {activeTab === key && component}
        </Tab>
    );

    // TODO (#130): replace false with a transition to apply to Meet the Fish
    const getTransition = key => (key === MEET ? false : Fade);
    const setNavTheme = key => {
        if (key === 'testYourSkills') {
            return invertedTheme;
        } else {
            return theme;
        }
    };
    return (
        <StyledNavbar hide={isQuizVisible ? 'none' : 'visible'}>
            <StyledTabs
                activeKey={activeTab}
                transition={getTransition(activeTab)}
                onSelect={key => {
                    dispatch(setActiveTab(key));
                    dispatch(setBackgroundPosition(POSITIONS[key]));
                }}
                theme={setNavTheme(activeTab)}
            >
                {tab(ABOUT, <About />)}
                {tab(SEE, <SeeTheFishway />)}
                {tab(MEET, <MeetTheFish />)}
                {tab(TEST, <QuizHome />)}
            </StyledTabs>
        </StyledNavbar>
    );
};

export default Navbar;
