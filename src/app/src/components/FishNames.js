import React from 'react';
import { string } from 'prop-types';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { Heading, Text } from './custom-styled-components';

const StyledFishNames = styled(Flex)`
    flex-direction: column;
`;

const CommonName = styled(Heading)`
    margin-bottom: 0;
    line-height: ${themeGet('lineHeights.compact')};
    font-size: 2rem;
`;

const ScientificName = styled(Text)`
    font-style: italic;
    margin-bottom: ${themeGet('space.medium')};
`;

const FishNames = ({ commonName, scientificName }) => {
    return (
        <StyledFishNames>
            <CommonName as='h3'>{commonName}</CommonName>
            <ScientificName as='h4' variant='base'>
                {scientificName}
            </ScientificName>
        </StyledFishNames>
    );
};

FishNames.propTypes = {
    commonName: string.isRequired,
    scientificName: string,
};

export default FishNames;
