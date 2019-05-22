import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';

import { HighlightFish } from '../util/HighlightFish';

import Video from './Video';

const StyledSidebar = styled(Box)`
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    width: 100%;
`;

const Sidebar = ({ fish }) => {
    const { commonName, scientificName, path, notes, timestamp } = fish;
    const date = moment(timestamp)
        .format('MMMM Do')
        .toUpperCase();
    const video = fish && (
        <Video src={`${path}.mp4`} autoPlay={true} setref={null} />
    );
    return (
        <StyledSidebar>
            <Heading as='h2' variant='small'>
                {commonName}
                <Text variant='small'>{scientificName}</Text>
            </Heading>
            {video}
            <footer>
                <Text variant='small'>{notes}</Text>
                <Text variant='small'>{date}</Text>
            </footer>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    fish: HighlightFish.isRequired,
};

export default Sidebar;
