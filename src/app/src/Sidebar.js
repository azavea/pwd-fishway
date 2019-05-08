import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading } from './custom-styled-components';
import { themeGet } from 'styled-system';

const StyledSidebar = styled(Box)`
    width: 300px;
    background: ${themeGet('colors.lightgray')};
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Heading as='h2' variant='small'>
                Sidebar
            </Heading>
        </StyledSidebar>
    );
};

export default Sidebar;
