import React from 'react';
import styled from 'styled-components';

const StyledQuiz = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.div`
    width: 500px;
    text-align: center;
    margin-bottom: 50px;
`;

const Button = styled.button`
    border-radius: 15px;
    box-shadow: 0px 4px 12px 0px rgba(17, 20, 39, 0.9);
    height: 70px;
    width: 200px;
`;

const Text = styled.p``;

const Quiz = () => {
    return (
        <StyledQuiz>
            <Description>
                <Text as='h1'>Test your skills</Text>
                <Text as='h4'>
                    Aquatic biologists need to identify each fish that moves
                    through the fishway. This can be tough, because fish swim
                    fast and are hard to see!
                </Text>
                <Text>
                    Watch the clip of fish moving through the fishway and match
                    it to the correct fish. Work quickly and carefully to get
                    the highest score!
                </Text>
            </Description>
            <Button>
                <Text as='h2'>PLAY</Text>
            </Button>
        </StyledQuiz>
    );
};

export default Quiz;
