import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function Navbar() {
    return (
        <Tabs defaultActiveKey='about' className='navbar'>
            <Tab eventKey='about' title='About'>
                <div>About</div>
            </Tab>
            <Tab eventKey='view' title='View from the Fishway'>
                <div>View from the Fishway</div>
            </Tab>
            <Tab eventKey='meet' title='Meet the Fish'>
                <div>Meet the Fish</div>
            </Tab>
            <Tab eventKey='test' title='Test your Skills'>
                <div>Test your Skills</div>
            </Tab>
        </Tabs>
    );
}
