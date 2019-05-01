import React from 'react';
import styled from 'styled-components';

const StyledSeeTheFishway = styled.div`
    display: flex;

    .video-panel {
        min-width: 300px;
    }
`;

const SeeTheFishway = () => {
    return (
        <StyledSeeTheFishway>
            <div className='library'>
                <div className='library__description'>
                    <h1>See the Fishway</h1>
                    During the Spring migration, a video camera transmits live
                    images to this exhibit, and to aquatic biologists.
                    Biologists monitor fish moving up and down the river. In
                    Springtime, fish travel upriver to their spawning grounds,
                    to mate and lay eggs. This is when the Fish Ladder is most
                    active.
                </div>
                <div className='videos' />
            </div>
            <div className='video-panel' />
        </StyledSeeTheFishway>
    );
};

export default SeeTheFishway;
