import { Button as BaseButton } from 'rebass';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import {
    themeGet,
    style,
    opacity,
    letterSpacing,
    fontFamily,
} from 'styled-system';

const variant = style({
    prop: 'variant',
    cssProperty: 'variant',
});

const buttonKeyframes = keyframes`
  0% { background-position: auto auto; }
  100% { background-position: bottom right; }
`;

const Button = styled(BaseButton)`
    font-family: ${props => themeGet(`${props.fontFamily}`, 'font')};
    transition: all 0.25s;
    ${opacity};
    ${letterSpacing};

    &:focus {
        outline: none;
    }

    ${props =>
        props.variant === 'primary' &&
        css`
            background-image: linear-gradient(
                to bottom right,
                ${themeGet('colors.greens.1')} 0%,
                ${themeGet('colors.greens.0')} 50%,
                ${themeGet('colors.greens.2')} 70%,
                ${themeGet('colors.greens.0')} 100%
            );
            background-size: 400% 400%;
            border: 3px solid ${themeGet('colors.greens.2')};
            box-shadow: 1px transparent;
            color: ${themeGet('colors.black')};
            font-size: ${themeGet('fontSizes.2')};
            font-weight: ${themeGet('fontWeights.semibold')};
            text-transform: uppercase;
            &:active {
                animation: ${buttonKeyframes} 0.5s linear forwards;
                box-shadow: inset 0px 0px 1px 3px ${themeGet('colors.greens.0')};
            }
        `};

    ${props =>
        props.variant === 'secondary' &&
        css`
            color: ${themeGet('colors.black')};
            background-image: linear-gradient(
                to bottom right,
                ${themeGet('colors.lightblues.2')} 0%,
                ${themeGet('colors.lightblues.0')} 50%,
                ${themeGet('colors.lightblues.3')} 70%,
                ${themeGet('colors.lightblues.0')} 100%
            );
            background-size: 400% 400%;
            box-shadow: 1px transparent;
            border: 3px solid ${themeGet('colors.lightblues.3')};
            font-size: ${themeGet('fontSizes.2')};
            font-weight: ${themeGet('fontWeights.semibold')};
            text-transform: uppercase;
            &:active {
                animation: ${buttonKeyframes} 0.5s linear forwards;
                box-shadow: inset 0px 0px 1px 3px
                    ${themeGet('colors.lightblues.0')};
            }
        `};

    ${props =>
        props.variant === 'link' &&
        css`
            background: transparent;
            border: none;
            font-size: ${themeGet('fontSizes.1')};
            letter-spacing: 0;
            font-weight: ${themeGet('fontWeights.normal')};
            font-style: italic;
            opacity: 0.8;
            padding: 0;
        `};
    &:active {
        opacity: 0.5;
    }
`;

Button.displayName = 'Button';

Button.propTypes = {
    variant: PropTypes.string.isRequired,
};

Button.PropTypes = {
    ...variant.PropTypes,
    ...opacity.PropTypes,
    ...letterSpacing.PropTypes,
    ...fontFamily.PropTypes,
};

Button.defaultProps = {
    as: 'button',
    color: 'white',
    lineHeight: 'compact',
    opacity: '0.9',
    letterSpacing: 'caps',
    fontWeight: 'semibold',
    borderRadius: '15px',
    px: 'comfortable',
    py: 'medium',
    variant: 'primary',
};

export default Button;
