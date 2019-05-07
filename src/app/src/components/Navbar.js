import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styled from 'styled-components';

import About from './About';
import SeeTheFishway from './SeeTheFishway';
import MeetTheFish from './MeetTheFish';
import Quiz from './Quiz';

const StyledTabs = styled(Tabs)`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const StyledNavbar = styled.div`
    display: ${props => props.hide};
`;

const Navbar = props => {
    return (
        // unmountOnExit is used to ensure that videos restart when switching
        // from About tab to another tab and back again
        <StyledNavbar hide={props.isQuizVisible ? 'none' : 'visible'}>
            <StyledTabs defaultActiveKey='about' unmountOnExit={true}>
                <Tab eventKey='about' title='About'>
                    <About />
                </Tab>
                <Tab eventKey='see' title='See the Fishway'>
                    <SeeTheFishway />
                </Tab>
                <Tab eventKey='meet' title='Meet the Fish'>
                    <MeetTheFish />
                </Tab>
                <Tab eventKey='test' title='Test your Skills'>
                    <Quiz />
                </Tab>
            </StyledTabs>
        </StyledNavbar>
    );
};

export default Navbar;
