import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'rebass';
import { themeGet } from 'styled-system';

const StyledSidebar = styled(Box)`
    width: 300px;
    background: ${themeGet('colors.lightgray')};
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Heading as='h2' fontSize='2'>
                Sidebar
            </Heading>
        </StyledSidebar>
    );
};

export default Sidebar;
