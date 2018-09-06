import {injectGlobal} from 'styled-components';
import styledNormalize from 'styled-normalize';
import config from '../config';

const publicPath = config.get('publicPath');

export default injectGlobal`
${styledNormalize}

@font-face {
    font-family: 'SimplonHeadline';
    src:
    url(${publicPath + '/fonts/simplonbp-regular-webfont.eot'});
    src:
    url(${publicPath + '/fonts/simplonbp-regular-webfont.eot?#iefix'}) format('embedded-opentype'),
    url(${publicPath + '/fonts/simplonoi-headline-webfont.woff'}) format('woff'),
    url(${publicPath + '/fonts/simplonoi-headline-webfont.ttf'}) format('truetype'),
    url(${publicPath + '/fonts/simplonoi-headline-webfont.svg'}) format('svg');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Simplon';
    src:
    url(${publicPath + '/fonts/simplonbp-light-webfont.eot'});
    src:
    url(${publicPath + '/fonts/simplonbp-light-webfont.eot'+ '?#iefix'}) format('embedded-opentype'),
    url(${publicPath + '/fonts/simplonbp-light-webfont.woff'}) format('woff'),
    url(${publicPath + '/fonts/simplonbp-light-webfont.ttf'}) format('truetype'),
    url(${publicPath + '/fonts/simplonbp-light-webfont.svg'}) format('svg');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Simplon';
    src:
    url(${publicPath + '/fonts/simplonbp-regular-webfont.eot'});
    src:
    url(${publicPath + '/fonts/simplonbp-regular-webfont.eot'+ '?#iefix'}) format('embedded-opentype'),
    url(${publicPath + '/fonts/simplonbp-regular-webfont.woff'}) format('woff'),
    url(${publicPath + '/fonts/simplonbp-regular-webfont.ttf'}) format('truetype'),
    url(${publicPath + '/fonts/simplonbp-regular-webfont.svg'}) format('svg');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Simplon-Bold';
    src:
    url(${publicPath + '/fonts/simplonbp-bold-webfont.eot'});
    src:
    url(${publicPath + '/fonts/simplonbp-bold-webfont.eot'+ '?#iefix'}) format('embedded-opentype'),
    url(${publicPath + '/fonts/simplonbp-bold-webfont.woff'}) format('woff'),
    url(${publicPath + '/fonts/simplonbp-bold-webfont.ttf'}) format('truetype'),
    url(${publicPath + '/fonts/simplonbp-bold-webfont.svg'}) format('svg');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'Simplon-Medium';
    src:
    url(${publicPath + '/fonts/simplonbp-medium-webfont.eot'});
    src:
    url(${publicPath + '/fonts/simplonbp-medium-webfont.eot'+ '?#iefix'}) format('embedded-opentype'),
    url(${publicPath + '/fonts/simplonbp-medium-webfont.woff'}) format('woff'),
    url(${publicPath + '/fonts/simplonbp-medium-webfont.ttf'}) format('truetype'),
    url(${publicPath + '/fonts/simplonbp-medium-webfont.svg'}) format('svg');
    font-weight: 600;
    font-style: normal;
}
html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    box-sizing: border-box;
    background-color: #FFF;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
.loaded{
  opacity: 1;
}
:disabled {
      cursor: no-drop;
}
pre {
  margin: 20px auto;
}
`;
