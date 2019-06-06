import React, { useState } from 'react';
import styled from 'styled-components';
import { func, number, bool } from 'prop-types';

import { Heading, Text } from './custom-styled-components';
import { CatalogFish } from '../util/CatalogFish';
import { FISH_MODAL_OPEN_DELAY } from '../util/constants';

const FishImage = styled.img`
    max-width: 400px;
    max-height: 450px;
    transition: transform 1s linear;

    &.large {
        transform: scale(1.5);
    }
`;

const FishButton = styled.button`
    background-color: transparent;
    border: none;

    :focus {
        outline: none;
    }
`;

const MeetTheFishButton = ({ fish, index, disabled, onButtonClick }) => {
    const [isFishLarge, setIsFishLarge] = useState(false);

    const caption = (
        <Heading as='h2' variant='small'>
            {fish.commonName}
            <Text variant='small'>{fish.scientificName}</Text>
        </Heading>
    );

    const onFishClicked = () => {
        setIsFishLarge(true);
        setTimeout(() => setIsFishLarge(false), FISH_MODAL_OPEN_DELAY);
    };

    return (
        <>
            <FishButton
                key={fish.commonName}
                onClick={() => {
                    onFishClicked();
                    onButtonClick(index);
                }}
                disabled={disabled}
            >
                <FishImage
                    src={fish.picturePath}
                    className={isFishLarge && 'large'}
                    alt={fish.commonName}
                />
                {caption}
            </FishButton>
        </>
    );
};

MeetTheFishButton.propTypes = {
    fish: CatalogFish.isRequired,
    index: number.isRequired,
    onButtonClick: func.isRequired,
    disabled: bool.isRequired,
};

export default MeetTheFishButton;
