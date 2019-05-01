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

const Navbar = () => {
    return (
        <StyledTabs defaultActiveKey='about'>
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
    );
};

export default Navbar;
