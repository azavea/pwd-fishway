import { Heading as BaseHeading } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Heading = styled(BaseHeading)`
    ${props =>
        props.variant === 'intro' &&
        css`
            font-size: ${themeGet('fontSizes.4')};
            color: ${themeGet('colors.white')};
            font-weight: ${themeGet('fontWeights.medium')};
            line-height: ${themeGet('lineHeights.normal')};
            text-shadow: ${themeGet('shadows.large')};
            margin-bottom: ${themeGet('space.medium')};
            opacity: 0.95;
        `};
    ${props =>
        props.variant === 'pageTitle' &&
        css`
            font-size: ${themeGet('fontSizes.3')};
            color: ${themeGet('colors.white')};
            font-weight: ${themeGet('fontWeights.semibold')};
            line-height: ${themeGet('lineHeights.normal')};
            margin-bottom: ${themeGet('space.compact')};
        `};
    ${props =>
        props.variant === 'sectionTitle' &&
        css`
            font-size: ${themeGet('fontSizes.2')};
            color: ${themeGet('colors.white')};
            font-weight: ${themeGet('fontWeights.semibold')};
            line-height: ${themeGet('lineHeights.normal')};
            margin-bottom: ${themeGet('space.small')};
        `};
`;

Heading.displayName = 'Heading';

Heading.PropTypes = {
    ...variant.PropTypes,
};

Heading.defaultProps = {
    variant: 'pageTitle',
};

export default Heading;
