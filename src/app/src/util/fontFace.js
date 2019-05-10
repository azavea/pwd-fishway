export function fontFace(
    name,
    src,
    fontWeight = 'normal',
    fontStyle = 'normal'
) {
    return `
        @font-face{
            font-family: "${name}";
            src: url(${require('../../public/fonts/' + src + '.eot')});
            src: url(${require('../../public/fonts/' +
                src +
                '.eot')}?#iefix) format("embedded-opentype"),
                 url(${require('../../public/fonts/' +
                     src +
                     '.woff2')}) format("woff2"),
                 url(${require('../../public/fonts/' +
                     src +
                     '.woff')}) format("woff"),
                 url(${require('../../public/fonts/' +
                     src +
                     '.ttf')}) format("truetype");
            font-weight: ${fontWeight};
            font-style: ${fontStyle};
        }
    `;
}
