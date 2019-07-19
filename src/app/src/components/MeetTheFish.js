import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import styled, { keyframes } from 'styled-components';
import { themeGet } from 'styled-system';

import { Heading, Text } from './custom-styled-components';
import MeetTheFishButton from './MeetTheFishButton';
import MeetTheFishModal from './MeetTheFishModal';

import { FISH_CATALOG, FISH_MODAL_OPEN_DELAY } from '../util/constants';

const fishBounce = keyframes`
    0% {
        transform: translateY(0);
    }
  
    50% {
        transform: translateY(1%);
    }
  
    100% {
        transform: translateY(0%);
    }
`;

const StyledMeetTheFish = styled(Flex)`
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
`;

const Header = styled(Box)`
    margin: 50px auto 0;
    max-width: ${themeGet('maxWidths.med')};
`;

const Subtitle = styled(Text)`
    padding: 0 300px;
`;

const FishReelContainer = styled(Box)`
    width: 100%;
    overflow-x: scroll;
    padding-left: 100px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const FishReel = styled(Flex)`
    flex-wrap: wrap;
    width: 280%;

    > div:nth-child(2n) {
        margin-top: 2%;
    }

    > div button {
        animation-name: ${fishBounce};
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    > div:nth-child(2n) button {
        animation-delay: 0.5s;
    }

    > div:nth-child(3n) button {
        animation-delay: 1s;
    }
`;

const MeetTheFish = () => {
    const [selectedFish, setSelectedFish] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalClose = () => {
        setIsModalOpen(false);
        setSelectedFish(null);
    };

    const onButtonClick = idx => {
        setSelectedFish(idx);
        setTimeout(() => setIsModalOpen(true), FISH_MODAL_OPEN_DELAY);
    };

    const fishButtons = FISH_CATALOG.map((fish, idx) => (
        <Box key={fish.commonName}>
            <MeetTheFishButton
                fish={fish}
                onButtonClick={onButtonClick}
                index={idx}
                disabled={selectedFish ? true : false}
            />
            <MeetTheFishModal
                index={idx}
                open={selectedFish === idx && isModalOpen ? true : false}
                onModalClose={onModalClose}
            />
        </Box>
    ));
    return (
        <StyledMeetTheFish>
            <Header>
                <Heading as='h1'>Meet the Fish</Heading>
                <Subtitle as='p' variant='large'>
                    Did you know over 48 species of fish live in the waterways
                    of Philadelphia? Here are 24 of the most common species.
                </Subtitle>
            </Header>
            <FishReelContainer>
                <FishReel>{fishButtons}</FishReel>
            </FishReelContainer>
        </StyledMeetTheFish>
    );
};

export default MeetTheFish;
