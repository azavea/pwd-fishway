import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Heading } from './custom-styled-components';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setBackgroundPosition } from '../actions';
import About from './About';
import SeeTheFishway from './SeeTheFishway';
import MeetTheFish from './MeetTheFish';
import QuizHome from './QuizHome';

const StyledTabs = styled(Tabs)`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);

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
            bottom: -27px;
            height: 2px;
            background: right center / 250%
                linear-gradient(
                    to right,
                    ${themeGet('colors.lightblues.0')} 0 20%,
                    ${themeGet('colors.lightblues.1')} 25% 50%,
                    transparent 50% 100%
                );
            border-radius: 2px;
            opacity: 0;
            transition: background-position 0.25s ease-in,
                opacity 0.25s 0.05s ease-in;
        }
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

const getPositionForTab = key => {
    if (key === 'about') {
        return 'bottom';
    } else if (key === 'see') {
        return 'high';
    } else if (key === 'meet') {
        return 'low';
    } else if (key === 'test') {
        return 'top';
    }
};

const Navbar = props => {
    const titles = {
        about: (
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
        seeTheFishway: (
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
        meetTheFish: (
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
        testYourSkills: (
            <Heading as='span' variant='xSmall' opacity='0.8'>
                <FontAwesomeIcon
                    icon={['far', 'bullseye-pointer']}
                    pull='left'
                    opacity='0.8'
                    size='lg'
                />
                Test your Skills
            </Heading>
        ),
    };
    return (
        <StyledNavbar hide={props.isQuizVisible ? 'none' : 'visible'}>
            {/* unmountOnExit is used to ensure that videos restart when
            switching from About tab to another tab and back again */}
            <StyledTabs
                defaultActiveKey='about'
                unmountOnExit={true}
                onSelect={key =>
                    props.dispatch(
                        setBackgroundPosition(getPositionForTab(key))
                    )
                }
            >
                <Tab eventKey='about' title={titles.about}>
                    <About />
                </Tab>
                <Tab eventKey='see' title={titles.seeTheFishway}>
                    <SeeTheFishway />
                </Tab>
                <Tab eventKey='meet' title={titles.meetTheFish}>
                    <MeetTheFish />
                </Tab>
                <Tab eventKey='test' title={titles.testYourSkills}>
                    <QuizHome />
                </Tab>
            </StyledTabs>
        </StyledNavbar>
    );
};

export default Navbar;
