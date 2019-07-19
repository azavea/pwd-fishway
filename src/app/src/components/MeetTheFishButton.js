import React, { useState } from 'react';
import styled from 'styled-components';
import { func, number, bool } from 'prop-types';

import { CatalogFish } from '../util/CatalogFish';
import { FISH_MODAL_OPEN_DELAY } from '../util/constants';

import FishNames from './FishNames';

const FishButton = styled.button`
    background-color: transparent;
    border: none;
    position: relative;

    &:focus {
        outline: none;
    }

    &::after {
        content: '';
        display: block;
        opacity: 0;
        z-index: 0;
        transition: all 0.25s ease-in;
    }

    &.is-large {
        &::after {
            background: black;
            border-radius: 50%;
            position: absolute;
            left: 25%;
            right: 25%;
            bottom: 40%;
            top: 25%;
            opacity: 0.25;
            filter: blur(20px);
        }
    }
`;

const FishImage = styled.img`
    max-width: 350px;
    max-height: 400px;
    z-index: 1;
    position: relative;
    transition: transform 0.25s ease-out;

    ${FishButton}.is-large & {
        transform: scale(1.5);
    }
`;

const StyledFishNames = styled(FishNames)`
    transform: scale(0.8);
    opacity: 0.75;
    transition: all 0.25s ease-out;
    transform-origin: top;
    text-shadow: 1px 0px rgba(0, 0, 0, 0.6);

    ${FishButton}.is-large & {
        transform: scale(1);
        opacity: 1;
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
                className={isFishLarge && 'is-large'}
                onClick={() => {
                    onFishClicked();
                    onButtonClick(index);
                }}
                disabled={disabled}
            >
                <FishImage src={fish.picturePath} alt={fish.commonName} />
                <StyledFishNames
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
