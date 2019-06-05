import { Heading as BaseHeading } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style, opacity } from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const Heading = styled(BaseHeading)`
    ${opacity};
    ${props =>
        props.variant === 'medium' &&
        css`
            font-size: ${themeGet('fontSizes.4')};
            margin-bottom: ${themeGet('space.medium')};
        `};
    ${props =>
        props.variant === 'base' &&
        css`
            font-size: ${themeGet('fontSizes.3')};
            margin-bottom: ${themeGet('space.medium')};
        `};
    ${props =>
        props.variant === 'small' &&
        css`
            font-size: ${themeGet('fontSizes.2')};
            margin-bottom: ${themeGet('space.medium')};
        `};
    ${props =>
        props.variant === 'xSmall' &&
        css`
            font-size: ${themeGet('fontSizes.1')};
            margin-bottom: ${themeGet('space.tiny')};
            text-transform: uppercase;
            letter-spacing: 1px;
        `};
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
    variant: PropTypes.string.isRequired,
};

Heading.PropTypes = {
    ...variant.PropTypes,
    ...opacity.PropTypes,
};

Heading.defaultProps = {
    color: 'white',
    lineHeight: 'normal',
    fontWeight: 'semibold',
    opacity: '1',
    variant: 'base',
};

export default Heading;
