import React from 'react';

export default function SeeTheFishway() {
    return (
        <div className='see-the-fishway'>
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
        </div>
    );
}
