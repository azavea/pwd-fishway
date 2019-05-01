import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    text-align: center;
    width: 400px;
`;

const MeetTheFish = () => {
    return (
        <div>
            <Header>
                <Text as='h3'>Meet the Fish</Text>
                <Text>
                    Did you know over 48 species of fish live in the waterways
                    of Philadelphia? Here are 24 of the most common species.
                </Text>
            </Header>
        </div>
    );
};

export default MeetTheFish;
