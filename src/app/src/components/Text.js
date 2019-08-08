import { Text as BaseText } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style, opacity } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const fontStyle = style({
    prop: 'fontStyle',
    cssProperty: 'font-style',
});

const Text = styled(BaseText)`
    ${opacity};
    ${props =>
        !!props.fontStyle &&
        css`
            font-style: ${props.fontStyle};
        `};
    ${props =>
        props.variant === 'xlarge' &&
        css`
            font-size: ${themeGet('fontSizes.3')};
        `};
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
    fontStyle: PropTypes.string.isRequired,
};

Text.PropTypes = {
    ...variant.PropTypes,
    ...opacity.PropTypes,
    ...fontStyle.PropTypes,
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
