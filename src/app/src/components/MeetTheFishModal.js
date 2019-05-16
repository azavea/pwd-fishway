import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Box, Button, Flex, Link } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { Heading, Text } from './custom-styled-components';

import { FISH } from '../util/constants';

const StyledPopup = styled(Popup)`
    width: 1500px !important;
    height: 90%;
`;

const ModalContainer = styled(Flex)`
    background: ${themeGet('colors.xlighttan')};
    overflow: visible;
    height: 100%;
`;

const CloseButton = styled(Button)`
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    width: 40px;
    border: 2px solid lightgrey;
    background: grey;
    color: white;
`;

const FishPicture = styled(Box)`
    background: ${themeGet('colors.lighttan')};
    border-radius: 50%;
    height: 400px;
    width: 400px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;

    img {
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
`;

const StyledHeading = styled(Heading)`
    color: ${themeGet('colors.darkbrown')};
`;

const StyledText = styled(Text)`
    color: ${themeGet('colors.darkbrown')};
`;

const Content = styled(Box)`
    flex: auto;
    position: relative;
    overflow-y: auto;
    padding: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default class MeetTheFishModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
        };

        this.overviewRef = React.createRef();
        this.characteristicsRef = React.createRef();
        this.habitatRef = React.createRef();
        this.lifespanRef = React.createRef();
    }

    scrollTo(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    getNavigationButton(index) {
        return (
            <Button onClick={() => this.setState({ index: index })}>
                {FISH[index].commonName}
            </Button>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.index !== this.state.index &&
            this.overviewRef.current !== null
        ) {
            this.overviewRef.current.scrollIntoView();
        }
    }

    render() {
        const { children } = this.props;

        const fish = FISH[this.state.index];

        let navButtons = null;
        if (this.state.index > 0 && this.state.index < FISH.length - 1) {
            navButtons = (
                <Flex justifyContent='space-between'>
                    {this.getNavigationButton(this.state.index - 1)}
                    {this.getNavigationButton(this.state.index + 1)}
                </Flex>
            );
        } else if (this.state.index === 0) {
            navButtons = (
                <Flex justifyContent='flex-end'>
                    {this.getNavigationButton(this.state.index + 1)}
                </Flex>
            );
        } else {
            navButtons = (
                <Flex justifyContent='flex-start'>
                    {this.getNavigationButton(this.state.index - 1)}
                </Flex>
            );
        }

        return (
            <StyledPopup
                trigger={children}
                modal
                closeOnDocumentClick
                onClose={() => this.setState({ index: this.props.index })}
            >
                {close => (
                    <ModalContainer>
                        <CloseButton onClick={close}>&times;</CloseButton>
                        <Flex width={1 / 4} flexDirection='column'>
                            <StyledHeading as='h3'>
                                {fish.commonName}
                            </StyledHeading>
                            <StyledText>{fish.scientificName}</StyledText>
                            <Link
                                onClick={() => this.scrollTo(this.overviewRef)}
                            >
                                Overview
                            </Link>
                            <Link
                                onClick={() =>
                                    this.scrollTo(this.characteristicsRef)
                                }
                            >
                                Characteristics
                            </Link>
                            {fish.habitat !== '' && (
                                <Link
                                    onClick={() =>
                                        this.scrollTo(this.habitatRef)
                                    }
                                >
                                    Habitat
                                </Link>
                            )}
                            <Link
                                onClick={() => this.scrollTo(this.lifespanRef)}
                            >
                                Lifespan
                            </Link>
                        </Flex>
                        <Flex width={3 / 4} flexDirection='column'>
                            <FishPicture>
                                <img src={fish.picturePath} alt='' />
                            </FishPicture>
                            <Content width={3 / 5}>
                                <StyledHeading as='h4' ref={this.overviewRef}>
                                    Overview
                                </StyledHeading>
                                <StyledText>{fish.overview}</StyledText>
                                <StyledHeading
                                    as='h4'
                                    ref={this.characteristicsRef}
                                >
                                    Characteristics
                                </StyledHeading>
                                <StyledText>{fish.characteristics}</StyledText>
                                {fish.habitat !== '' && (
                                    <>
                                        <StyledHeading
                                            as='h4'
                                            ref={this.habitatRef}
                                        >
                                            Habitat
                                        </StyledHeading>
                                        <StyledText>{fish.habitat}</StyledText>
                                    </>
                                )}
                                <StyledHeading as='h4' ref={this.lifespanRef}>
                                    Lifespan
                                </StyledHeading>
                                <StyledText>{fish.lifespan}</StyledText>
                            </Content>
                            {navButtons}
                        </Flex>
                    </ModalContainer>
                )}
            </StyledPopup>
        );
    }
}
