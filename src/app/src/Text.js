import { Text as BaseText } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Text = styled(BaseText)`
    color: ${themeGet('colors.white')};
    font-weight: ${themeGet('fontWeights.normal')};
    line-height: ${themeGet('lineHeights.normal')};
    margin-bottom: ${themeGet('space.small')};
    opacity: 0.8;

    ${props =>
        props.variant === 'large' &&
        css`
            font-size: ${themeGet('fontSizes.2')};
            font-weight: ${themeGet('fontWeights.medium')};
        `};
    ${props =>
        props.variant === 'base' &&
        css`
            font-size: ${themeGet('fontSizes.1')};
        `};
    ${props =>
        props.variant === 'small' &&
        css`
            font-size: ${themeGet('fontSizes.0')};
        `};
`;

Text.displayName = 'Text';

Text.propTypes = {
    variant: PropTypes.string.isRequired,
};

Text.PropTypes = {
    ...variant.PropTypes,
};

Text.defaultProps = {
    variant: 'base',
};

export default Text;
