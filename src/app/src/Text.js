import { Text as BaseText } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Text = styled(BaseText)`
    ${props =>
        props.variant === 'big' &&
        css`
            font-size: ${themeGet('fontSizes.1')};
            color: ${themeGet('colors.white')};
            font-weight: ${themeGet('fontWeights.medium')};
            line-height: ${themeGet('lineHeights.normal')};
            margin-bottom: ${themeGet('space.small')};
            opacity: 0.8;
        `};

    ${props =>
        props.variant === 'body' &&
        css`
            font-size: ${themeGet('fontSizes.0')};
            color: ${themeGet('colors.white')};
            font-weight: ${themeGet('fontWeights.normal')};
            line-height: ${themeGet('lineHeights.normal')};
            margin-bottom: ${themeGet('space.small')};
            opacity: 0.8;
        `};
`;

Text.displayName = 'Text';

Text.PropTypes = {
    ...variant.PropTypes,
};

Text.defaultProps = {
    variant: 'body',
};

export default Text;
