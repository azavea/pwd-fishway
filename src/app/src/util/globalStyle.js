import { createGlobalStyle } from 'styled-components';
import { fontFace } from './fontFace';
import { themeGet } from 'styled-system';

const GlobalStyle = createGlobalStyle`
    div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body,
    html {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        height: 100%;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, 
    blockquote:after,
    q:before, 
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *,
    *:after,
    *:before {
       box-sizing: border-box;
    }

    /* FontFace Fira*/
    ${fontFace('Fira Sans', 'fira/FiraSans-Regular', 400, 'normal')}
    ${fontFace('Fira Sans', 'fira/FiraSans-Italic', 400, 'italic')}
    ${fontFace('Fira Sans', 'fira/FiraSans-Medium', 500, 'normal')}
    ${fontFace('Fira Sans', 'fira/FiraSans-MediumItalic', 500, 'italic')}
    ${fontFace('Fira Sans', 'fira/FiraSans-SemiBold', 600, 'normal')}
    ${fontFace('Fira Sans', 'fira/FiraSans-SemiBoldItalic', 600, 'italic')}
    ${fontFace('Fira Sans', 'fira/FiraSans-ExtraBold', 800, 'normal')}

    /* Global styles */
    html {
       font-size: 16px;
       font-family: Fira Sans, Helvetica, Arial, sans-serif;
    }

    body {
       line-height: 1;
       background: ${themeGet('colors.lightblues.0')};
    }
    
    *::selection {
        background: transparent;
    }

    #root, 
    .App, 
    .App >div {
        height: 100%;
    }

    .tab-pane[aria-hidden='true'] {
        display: none;
    }
`;

export default GlobalStyle;
