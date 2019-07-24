import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { func, number, bool } from 'prop-types';

import { CatalogFish } from '../util/CatalogFish';
import { FISH_MODAL_OPEN_DELAY } from '../util/constants';

import FishNames from './FishNames';

const fishBounce = keyframes`
    0% {
        transform: translateY(0);
    }
  
    50% {
        transform: translateY(3%);
    }
  
    100% {
        transform: translateY(0%);
    }
`;

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

    &.is-selected {
        opacity: 1;

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
    animation-name: ${fishBounce};
    animation-duration: 4s;
    animation-iteration-count: infinite;
`;

const StyledFishNames = styled(FishNames)`
    opacity: 0.75;
    transition: all 0.25s ease-out;
    text-shadow: 1px 0px rgba(0, 0, 0, 0.6);

    ${FishButton}.is-selected & {
        opacity: 1;
    }
`;

const MeetTheFishButton = ({ fish, index, disabled, onButtonClick }) => {
    const [isFishSelected, setIsFishSelected] = useState(false);

    const onFishClicked = () => {
        setIsFishSelected(true);
        setTimeout(() => setIsFishSelected(false), FISH_MODAL_OPEN_DELAY);
    };

    return (
        <>
            <FishButton
                key={fish.commonName}
                className={isFishSelected && 'is-selected'}
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
