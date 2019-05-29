import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import VideoPlayer from './VideoPlayer';

const StyledQuizSidebar = styled(Box)`
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    width: 100%;
`;

const QuizSidebar = ({ fish }) => {
    const video = fish && <VideoPlayer src={fish.videoPath} />;
    return (
        <StyledQuizSidebar>
            <Heading as='h2' variant='small'>
                What fish is this?
                <Text variant='small'>
                    Tap the fish that looks most like the one in the clip below
                </Text>
            </Heading>
            {video}
        </StyledQuizSidebar>
    );
};

export default QuizSidebar;
