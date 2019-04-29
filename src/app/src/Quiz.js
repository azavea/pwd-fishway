import React from 'react';

export default function Quiz() {
    return (
        <div className='quiz'>
            <div className='quiz__description'>
                <h1>Test your skills</h1>
                <h4>
                    Aquatic biologists need to identify each fish that moves
                    through the fishway. This can be tough, because fish swim
                    fast and are hard to see!
                </h4>
                Watch the clip of fish moving through the fishway and match it
                to the correct fish. Work quickly and carefully to get the
                highest score!
            </div>
            <button type='button' className='quiz__button'>
                PLAY
            </button>
        </div>
    );
}
