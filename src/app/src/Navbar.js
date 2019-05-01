import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SeeTheFishway from './SeeTheFishway';
import About from './About';
import MeetTheFish from './MeetTheFish';

export default function Navbar() {
    return (
        <Tabs defaultActiveKey='about' className='navbar'>
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
                <div>Test your Skills</div>
            </Tab>
        </Tabs>
    );
}
