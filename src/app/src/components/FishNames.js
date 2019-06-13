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
    color: ${themeGet('colors.white')};
    margin-bottom: 0;
`;

const ScientificName = styled(Text)`
    color: ${themeGet('colors.white')};
    font-style: italic;
`;

const FishNames = ({ commonName, scientificName }) => {
    return (
        <StyledFishNames>
            <CommonName as='h3' variant='small'>
                {commonName}
            </CommonName>
            <ScientificName variant='small'>{scientificName}</ScientificName>
        </StyledFishNames>
    );
};

FishNames.propTypes = {
    commonName: string.isRequired,
    scientificName: string.isRequired,
};

export default FishNames;
