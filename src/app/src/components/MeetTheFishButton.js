import React, { useState } from 'react';
import styled from 'styled-components';
import { func, number, bool } from 'prop-types';

import { CatalogFish } from '../util/CatalogFish';
import { FISH_MODAL_OPEN_DELAY } from '../util/constants';

import FishNames from './FishNames';

const FishImage = styled.img`
    max-width: 350px;
    max-height: 400px;
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
                <FishNames
                    commonName={fish.commonName}
                    scientificName={fish.scientificName}
                />
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
