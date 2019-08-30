import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import VideoPlayer from './VideoPlayer';

const StyledQuizSidebar = styled(Flex)`
    position: sticky;
    top: ${themeGet('navHeight')};
    flex-direction: column;
    justify-content: center;
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    padding: 3.95rem ${themeGet('space.comfortable')};
    height: calc(100vh - ${themeGet('navHeight')});
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 0;
`;

const StyledText = styled(Text)`
    max-width: 32rem;
    margin-bottom: ${themeGet('space.comfortable')};
`;

const StyledVideoPlayer = styled(VideoPlayer)`
    video {
        width: 100% !important;
    }
`;

const QuizSidebar = ({ fish }) => {
    const video = fish && (
        <StyledVideoPlayer src={fish.videoPath} key={fish.videoPath} />
    );
    return (
        <StyledQuizSidebar>
            <StyledHeading as='h2' variant='base'>
                Which fish is this?
            </StyledHeading>
            <StyledText variant='base'>
                Tap the fish from the right which looks most like the one in the
                clip below.
            </StyledText>
            {video}
        </StyledQuizSidebar>
    );
};

export default QuizSidebar;
