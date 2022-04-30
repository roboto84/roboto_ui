import { ThemeType } from '@/types/themeTypes';
import { tomorrowLight } from '@/styles/themes/tomorrowTheme';
import { lexiconLight } from '@/views/lexicon/styles/lexiconThemes';
import { debugLight } from '@/views/debug/styles/debugThemes';
import { customTheme } from '@/styles/themes/customTheme';
import { wh00tLight } from '@/views/wh00t/styles/wh00tThemes';
import { airLight } from '@/views/air/styles/airThemeStyle';

export const LightTheme: ThemeType = {
  core: {
    mainThemeColor: '#86a0a7',
    bgColor: '#d4d4d4',
    textColor: 'black',
    aLink: {
      linkColor: '#86a0a7',
      hoverColor: '#6898a5',
    },
    section: {
      backgroundColor: '#e3e3e3',
      borderColor: '#c7c7c7',
    },
    table: {
      borderColor: '#969696',
      headerColor: '#969696',
      highlightCellColor: '#89a4ab',
    },
    code: {
      backgroundColor: '#e8f5fa',
      borderColor: 'rgba(11,76,140,.2)',
      textColor: '#0b4c8c',
    },
  },
  button: {
    border: '#949494',
    fontColor: '#4e4e4e',
    transitionFontColor: 'white',
    backgroundColor: '#e3e3e3',
  },
  subButton: {
    backgroundColor: '#8a8b8b',
    fontColor: '#e9e9e9',
    transitionFontColor: '#e9e9e9',
    borderColor: '#8a8b8b',
  },
  chart: {
    border: '#d1d1d1',
    axisLabelFontColor: '#565656',
    axisXFontColor: '#7c7c7c',
    axisYFontColor: '#a2a2a2',
    backgroundColor: '#e3e3e3',
  },
  throbber: {
    background: '#ccc',
    foreground: '#86a0a7',
  },
  header: {
    subTitleColor: '#6c6c6c',
    secondaryTitleColor: '#6a9ca9',
    borderBottomColor: '#a5a5a5',
  },
  air: airLight,
  wh00t: wh00tLight,
  lexicon: lexiconLight,
  debug: debugLight,
};
