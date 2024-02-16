import { createGlobalStyle } from 'styled-components';
import { GlobalThemeType } from '@/types';

// @ts-ignore
import RobotoWoffTwo from '@/assets/fonts/roboto/roboto-v30-latin-300.woff2';
// @ts-ignore
import RobotoWoff from '@/assets/fonts/roboto/roboto-v30-latin-300.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url('${RobotoWoffTwo}') format('woff2'),
    url('${RobotoWoff}') format('woff');
  }

  h1 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 25px;
    margin: 15px 20px 0 15px;
    font-style: normal;
    font-weight: normal;
  }

  h2 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 18px;
    margin: 10px;
  }

  h3 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 15px;
    margin: 5px;
  }

  audio {
    border-radius: 8px;
    background-color: gray;
  }

  hr {
    display: block;
    margin: 4.0em auto;
    border: none;
    border-top: 3px double ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    overflow: visible;
    text-align: center;
    height: 5px;
  }

  hr:after {
    background-color: ${(props: GlobalThemeType) => props.theme.core.bgColor};
    padding: 0 12px;
    font-size: 2.5rem;
    content: '🍜';
    position: relative;
    top: -25px;
  }
`;
