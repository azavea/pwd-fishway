import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';

import { Heading, Text } from './custom-styled-components';
import MeetTheFishModal from './MeetTheFishModal';

import { FISH } from '../util/constants';

const StyledMeetTheFish = styled(Flex)`
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
`;

const Header = styled(Box)`
    margin: 50px auto;
`;

const FishButton = styled.button`
    background-color: transparent;
    border: none;
`;

const FishImage = styled.img`
    max-width: 400px;
    max-height: 350px;
`;

const FishReelContainer = styled(Box)`
    width: 100%;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const FishReel = styled(Flex)`
    flex-wrap: wrap;
    width: 380%;
`;

const MeetTheFish = () => {
    const buttons = FISH.map((fish, idx) => (
        <MeetTheFishModal index={idx}>
            <FishButton>
                <FishImage src={fish.picturePath} />
            </FishButton>
        </MeetTheFishModal>
    ));
    return (
        <StyledMeetTheFish>
            <Header>
                <Heading as='h1'>Meet the Fish</Heading>
                <Text as='p' variant='large' padding='0 400px'>
                    Did you know over 48 species of fish live in the waterways
                    of Philadelphia? Here are 24 of the most common species.
                </Text>
            </Header>
            <FishReelContainer>
                <FishReel>{buttons}</FishReel>
            </FishReelContainer>
        </StyledMeetTheFish>
    );
};

export default MeetTheFish;
