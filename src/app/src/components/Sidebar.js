import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading } from './custom-styled-components';
import { themeGet } from 'styled-system';

const StyledSidebar = styled(Box)`
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    width: 100%;
`;

const Sidebar = ({ fish }) => {
    const video = fish && <video src={`${fish.path}.mp4`} autoPlay={true} />;
    return (
        <StyledSidebar>
            <Heading as='h2' variant='small'>
                Sidebar
            </Heading>
            {video}
        </StyledSidebar>
    );
};

export default Sidebar;
