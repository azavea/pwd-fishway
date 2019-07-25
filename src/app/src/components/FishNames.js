import React from 'react';
import { string } from 'prop-types';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { Heading, Text } from './custom-styled-components';

const StyledFishNames = styled(Flex)`
    flex-direction: column;
    margin-bottom: ${props => themeGet(`${props.spacing}`, 0)};
`;

const CommonName = styled(Heading)`
    font-family: ${themeGet('font')};
    margin-bottom: 0;
    line-height: ${themeGet('lineHeights.compact')};
`;

const ScientificName = styled(Text)`
    font-family: ${themeGet('font')};
    font-style: ${themeGet('fontStyles.italic')};
    margin-bottom: ${themeGet('space.medium')};
`;

const FishNames = ({ className, commonName, scientificName }) => {
    return (
        <StyledFishNames className={className}>
            <CommonName as='h3' variant='small'>
                {commonName}
            </CommonName>
            <ScientificName as='h4' variant='base'>
                {scientificName}
            </ScientificName>
        </StyledFishNames>
    );
};

FishNames.propTypes = {
    commonName: string.isRequired,
    scientificName: string,
    className: string,
};

export default FishNames;
