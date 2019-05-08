import { Heading as BaseHeading } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Heading = styled(BaseHeading)`
    color: ${themeGet('colors.white')};
    line-height: ${themeGet('lineHeights.normal')};

    ${props =>
        props.variant === 'medium' &&
        css`
            font-size: ${themeGet('fontSizes.4')};
            font-weight: ${themeGet('fontWeights.medium')};
            margin-bottom: ${themeGet('space.medium')};
        `};
    ${props =>
        props.variant === 'base' &&
        css`
            font-size: ${themeGet('fontSizes.3')};
            font-weight: ${themeGet('fontWeights.semibold')};
            margin-bottom: ${themeGet('space.compact')};
        `};
    ${props =>
        props.variant === 'small' &&
        css`
            font-size: ${themeGet('fontSizes.2')};
            font-weight: ${themeGet('fontWeights.semibold')};
            margin-bottom: ${themeGet('space.small')};
        `};
`;

Heading.displayName = 'Heading';

Heading.PropTypes = {
    ...variant.PropTypes,
};

Heading.defaultProps = {
    variant: 'base',
};

export default Heading;
