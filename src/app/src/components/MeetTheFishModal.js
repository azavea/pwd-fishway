import React, { Component } from 'react';
import { func, bool, number } from 'prop-types';
import Popup from 'reactjs-popup';
import { Box, Flex, Link } from 'rebass';
import styled, { keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading, Text, Button } from './custom-styled-components';

import { FISH_CATALOG } from '../util/constants';
import Scrollspy from 'react-scrollspy';

const fishBounce = keyframes`
    0% {
        transform: translateY(0);
    }
  
    50% {
        transform: translateY(1%);
    }
  
    100% {
        transform: translateY(0%);
    }
`;

const shadowSize = keyframes`
    0% {
        transform: scaleX(0.8);
    }
  
    50% {
        transform: scaleX(1);
    }
  
    100% {
        transform: scaleX(0.8);
    }
`;

const StyledPopup = styled(Popup)`
    text-align: left;
    width: 1500px !important;
    height: 90vh;
    border-radius: 3px;
    border: 1px solid ${themeGet('colors.tan')};
`;

const ModalContainer = styled(Flex)`
    background: ${themeGet('colors.xlighttan')};
    overflow: visible;
    height: 100%;
`;

const CloseButton = styled(Button)`
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.darkbrown')};
    border: 6px solid ${themeGet('colors.medtan')};
    top: ${themeGet('space.compact')};
    right: ${themeGet('space.compact')};
    position: absolute;
`;

const ModalNavigation = styled(Flex)`
    flex-direction: column;
    padding: ${themeGet('space.normal')};
    background-color: ${themeGet('colors.lighttan')};
    border-right: 1px solid ${themeGet('colors.tan')};
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: ${themeGet('space.compact')} ${themeGet('space.compact')}
        ${themeGet('space.compact')} 0;
    color: ${themeGet('colors.darkbrown')};
    opacity: 0.5;
    text-decoration: none;
    transition: opacity 0.25s ease-in;

    &.is-current {
        opacity: 1;
    }
`;

const StyledLinkHeading = styled(Heading)`
    color: ${themeGet('colors.darkbrown')};
`;

const FishPictureContainer = styled(Box)`
    position: absolute;
    top: 50%;
    right: -3rem;
    transform: translateY(-50%);

    img {
        width: 485px;
        height: auto;
        animation: ${fishBounce} 3s infinite;
        position: relative;
        z-index: 1;
    }
`;

const FishShadow = styled.div`
    background: ${themeGet('colors.tan')};
    border-radius: 50%;
    position: absolute;
    left: 40%;
    right: 40%;
    bottom: -10%;
    height: 3%;
    filter: blur(5px);
    mix-blend-mode: difference;
    animation: ${shadowSize} 3s infinite;
`;

const FishCircle = styled.div`
    background: #ddf4f0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    height: 350px;
    transform: translateY(-50%) translateX(-50%);
    z-index: -1;
    transition: all 0.25s;
`;

const StyledFishName = styled(Heading)`
    color: ${themeGet('colors.darkbrown')};
    line-height: ${themeGet('lineHeights.compact')};
    margin-bottom: 0.4rem;
`;

const StyledFishScientificName = styled(Text)`
    font-style: ${themeGet('fontStyles.italic')};
    color: ${themeGet('colors.darkbrown')};
    line-height: ${themeGet('lineHeights.compact')};
    margin-bottom: ${themeGet('space.normal')};
    font-weight: ${themeGet('fontWeights.medium')};
`;

const StyledHeading = styled(Heading)`
    color: ${themeGet('colors.darkbrown')};
    margin: 0;
    padding: ${themeGet('space.comfortable')} 0 ${themeGet('space.small')};
`;

const StyledText = styled(Text)`
    color: ${themeGet('colors.darkbrown')};
    margin-bottom: 0.85rem;
`;

const Content = styled(Box)`
    flex: auto;
    position: relative;
    overflow-y: auto;
    padding: 0 0 ${themeGet('space.comfortable')}
        ${themeGet('space.comfortable')};

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledPaginator = styled(Flex)`
    background: ${themeGet('colors.white')};
    padding-top: ${themeGet('space.small')};
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: -2rem;
        height: 2rem;
        pointer-events: none;
        background: linear-gradient(
            rgba(255, 253, 249, 0) 0%,
            rgb(255, 253, 249) 100%
        );
        border-bottom: 1px solid ${themeGet('colors.tan')};
    }
`;

const StyledNavButton = styled(Button)`
    padding: ${themeGet('space.compact')};
    font-style: ${themeGet('fontStyles.normal')};
    font-weight: ${themeGet('fontWeights.semibold')};
    color: ${themeGet('colors.darkbrown')};
    text-transform: uppercase;
    letter-spacing: ${themeGet('letterSpacings.caps')};
`;

export default class MeetTheFishModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
        };
    }

    getNavigationButton(index, isPrev, isNext) {
        const prevIcon = (
            <FontAwesomeIcon
                icon={['far', 'long-arrow-left']}
                pull='left'
                opacity='0.5'
            />
        );
        const nextIcon = (
            <FontAwesomeIcon
                icon={['far', 'long-arrow-right']}
                pull='right'
                opacity='0.5'
            />
        );

        return (
            <StyledNavButton
                variant='link'
                onClick={() => this.setState({ index: index })}
            >
                {isPrev && prevIcon}
                {FISH_CATALOG[index].commonName}
                {isNext && nextIcon}
            </StyledNavButton>
        );
    }

    componentDidUpdate(_, prevState) {
        if (
            prevState.index !== this.state.index &&
            document.getElementById('content')
        ) {
            document.getElementById('content').scrollTo(0, 0);
        }
    }

    render() {
        const { open, onModalClose } = this.props;

        const fish = FISH_CATALOG[this.state.index];

        let navButtons = null;
        if (
            this.state.index > 0 &&
            this.state.index < FISH_CATALOG.length - 1
        ) {
            navButtons = (
                <StyledPaginator justifyContent='space-between'>
                    {this.getNavigationButton(
                        this.state.index - 1,
                        true,
                        false
                    )}
                    {this.getNavigationButton(
                        this.state.index + 1,
                        false,
                        true
                    )}
                </StyledPaginator>
            );
        } else if (this.state.index === 0) {
            navButtons = (
                <StyledPaginator justifyContent='flex-end'>
                    {this.getNavigationButton(
                        this.state.index + 1,
                        false,
                        true
                    )}
                </StyledPaginator>
            );
        } else {
            navButtons = (
                <StyledPaginator justifyContent='flex-start'>
                    {this.getNavigationButton(
                        this.state.index - 1,
                        true,
                        false
                    )}
                </StyledPaginator>
            );
        }

        const linksInfo = [
            {
                text: 'Overview',
                id: 'section-overview',
                icon: 'info-circle',
                hide: !fish.overview,
            },
            {
                text: 'Characteristics',
                id: 'section-characteristics',
                icon: 'eye',
                hide: !fish.characteristics,
            },
            {
                text: 'Habitat',
                id: 'section-habitat',
                icon: 'home',
                hide: !fish.habitat,
            },
            {
                text: 'Lifespan',
                id: 'section-lifespan',
                icon: 'history',
                hide: !fish.lifespan,
            },
        ];

        const linkItems = linksInfo.map((link, index) => {
            if (link.hide) {
                return false;
            }

            return (
                <StyledLink key={index} href={'#' + link.id}>
                    <FontAwesomeIcon
                        icon={['far', link.icon]}
                        pull='left'
                        size='lg'
                        color='#2a8171'
                    />
                    <StyledLinkHeading as='span' variant='xSmall'>
                        {link.text}
                    </StyledLinkHeading>
                </StyledLink>
            );
        });

        const overviewParagraphs = fish.overview.map((paragraph, index) => (
            <StyledText as='p' key={fish.commonName + ' overview ' + index}>
                {paragraph}
            </StyledText>
        ));

        const characteristicsParagraphs = fish.characteristics.map(
            (paragraph, index) => (
                <StyledText
                    as='p'
                    key={fish.commonName + ' characteristics ' + index}
                >
                    {paragraph}
                </StyledText>
            )
        );

        const habitatParagraphs =
            fish.habitat !== undefined &&
            fish.habitat.map((paragraph, index) => (
                <StyledText as='p' key={fish.commonName + ' habitat ' + index}>
                    {paragraph}
                </StyledText>
            ));

        const lifespanParagraphs = fish.lifespan.map((paragraph, index) => (
            <StyledText as='p' key={fish.commonName + ' lifespan ' + index}>
                {paragraph}
            </StyledText>
        ));

        return (
            <StyledPopup
                open={open}
                modal
                closeOnDocumentClick
                lockScroll
                onClose={() => {
                    this.setState({ index: this.props.index });
                    onModalClose();
                }}
            >
                {close => (
                    <ModalContainer>
                        <CloseButton variant='close' onClick={close}>
                            <FontAwesomeIcon icon={['far', 'times']} />
                        </CloseButton>
                        <ModalNavigation width={1 / 4}>
                            <StyledFishName as='h1' variant='base'>
                                {fish.commonName}
                            </StyledFishName>
                            <StyledFishScientificName as='h2' variant='base'>
                                {fish.scientificName}
                            </StyledFishScientificName>

                            <Scrollspy
                                items={[
                                    'section-overview',
                                    'section-characteristics',
                                    'section-habitat',
                                    'section-lifespan',
                                ]}
                                currentClassName='is-current'
                                componentTag='div'
                                rootEl='#content'
                            >
                                {linkItems}
                            </Scrollspy>
                        </ModalNavigation>
                        <Flex width={3 / 4} flexDirection='column'>
                            <FishPictureContainer>
                                <img src={fish.picturePath} alt='' />
                                <FishShadow />
                                <FishCircle />
                            </FishPictureContainer>

                            <Content width={3 / 5} id='content'>
                                <section id='section-overview'>
                                    <StyledHeading as='h4' variant='small'>
                                        Overview
                                    </StyledHeading>
                                    {overviewParagraphs}
                                </section>
                                <section id='section-characteristics'>
                                    <StyledHeading as='h4' variant='small'>
                                        Characteristics
                                    </StyledHeading>
                                    {characteristicsParagraphs}
                                </section>
                                {fish.habitat !== undefined && (
                                    <section id='section-habitat'>
                                        <StyledHeading as='h4' variant='small'>
                                            Habitat
                                        </StyledHeading>
                                        {habitatParagraphs}
                                    </section>
                                )}
                                <section id='section-lifespan'>
                                    <StyledHeading as='h4' variant='small'>
                                        Lifespan
                                    </StyledHeading>
                                    {lifespanParagraphs}
                                </section>
                            </Content>

                            {navButtons}
                        </Flex>
                    </ModalContainer>
                )}
            </StyledPopup>
        );
    }
}

MeetTheFishModal.propTypes = {
    open: bool.isRequired,
    index: number.isRequired,
    onModalClose: func.isRequired,
};
