import { Heading as BaseHeading } from 'rebass';
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

const Heading = styled(BaseHeading)`
    ${opacity};
    ${props =>
        !!props.fontStyle &&
        css`
            font-style: ${props.fontStyle};
        `};
    ${props =>
        props.variant === 'xxlarge' &&
        css`
            font-size: ${themeGet('fontSizes.8')};
            font-weight: ${themeGet('fontWeights.black')};
        `};
    ${props =>
        props.variant === 'xlarge' &&
        css`
            font-size: ${themeGet('fontSizes.7')};
            margin-bottom: ${themeGet('space.medium')};
        `};
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
    ${props =>
        props.variant === 'pageTitle' &&
        css`
            font-size: ${themeGet('fontSizes.3')};
            margin-bottom: ${themeGet('space.normal')};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &::after {
                content: '';
                display: block;
                margin-top: ${themeGet('space.small')};
                width: 4rem;
                height: 2px;
                background: ${themeGet('colors.lightblues.0')};
                opacity: 0.4;
            }
        `};
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
    variant: PropTypes.string.isRequired,
    fontStyle: PropTypes.string.isRequired,
};

Heading.PropTypes = {
    ...variant.PropTypes,
    ...opacity.PropTypes,
    ...fontStyle.PropTypes,
};

Heading.defaultProps = {
    color: 'white',
    lineHeight: 'normal',
    fontWeight: 'semibold',
    opacity: '1',
    variant: 'base',
    fontStyle: 'none',
};

export default Heading;
