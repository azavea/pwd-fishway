import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';

import { Heading, Text } from './custom-styled-components';
import MeetTheFishButton from './MeetTheFishButton';
import MeetTheFishModal from './MeetTheFishModal';

import { FISH, FISH_MODAL_OPEN_DELAY } from '../util/constants';

const StyledMeetTheFish = styled(Flex)`
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
`;

const Header = styled(Box)`
    margin-top: 50px;
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

const FishButtonAndModal = styled(Box)`
    padding: 20px;
`;

const FishReel = styled(Flex)`
    flex-wrap: wrap;
    width: 280%;
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

    const fishButtons = FISH.map((fish, idx) => (
        <FishButtonAndModal key={fish.commonName}>
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
        </FishButtonAndModal>
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
