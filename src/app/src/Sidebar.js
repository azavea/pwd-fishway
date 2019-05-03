import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'rebass';

const StyledSidebar = styled(Box)`
    width: 300px;
`;

const Sidebar = () => {
    return (
        <StyledSidebar bg='lightgray'>
            <Heading as='h2' fontSize='2'>
                Sidebar
            </Heading>
        </StyledSidebar>
    );
};

export default Sidebar;
