import { Text as BaseText } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style, opacity } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Text = styled(BaseText)`
    ${opacity};
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
    ...opacity.PropTypes,
};

Text.defaultProps = {
    color: 'white',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    mb: 'small',
    opacity: '0.8',
    variant: 'base',
};

export default Text;
