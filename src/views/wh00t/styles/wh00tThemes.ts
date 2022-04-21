import wh00tBackgroundDark from '@/assets/images/wh00t_background_dark.png';
import wh00tBackgroundLight from '@/assets/images/wh00t_background_light.png';
import { Wh00tThemeType } from '@/types';

export const wh00tDark: Wh00tThemeType = {
  backgroundImage: wh00tBackgroundDark,
  miniWh00t: {
    minimizedButton: {
      color: '#939393',
      borderColor: '#373737',
      backgroundColor: '#2F3436',
    },
    backgroundColor: '#1d1d1d',
    inputColor: 'rgb(255, 152, 0)',
  },
  largeWh00t: {
  },
  messages: {
    backgroundColor: '#1d1f21',
    otherUsernamesColor: '#de935f',
    usernameColor: '#b5bd68',
    botUsernameColor: '#3da497',
    usernameBaseImageBackgroundColor: '#8a904e',
    otherUsernameBaseImageBackgroundColor: '#94673f',
    timeColor: 'rgb(163,163,163)',
    messageText: '#f0c674',
    aLinkColor: '#81a2be',
  },
  chatInput: {
    button: {
      backgroundColor: '#2F3436',
      color: 'rgb(255, 163, 26)',
    },
    textInput: {
      borderColor: '#373737',
      backgroundColor: '#2F3436',
      focusBackgroundColor: '#2F3436',
      focusFontColor: 'rgb(255,152,0)',
    },
    emoji: {
      borderColor: '#474747',
    },
  },
  chatHeader: {
    backgroundColor: '#373737',
    titleColor: '#de935f',
    titleHighlightColor: '#bababa',
  },
  connect: {
    labelDescription: '#757575',
  },
};

export const wh00tLight: Wh00tThemeType = {
  backgroundImage: wh00tBackgroundLight,
  miniWh00t: {
    minimizedButton: {
      color: '#747474',
      borderColor: 'grey',
      backgroundColor: '#d4d4d4',
    },
    backgroundColor: '#d4d4d4',
    inputColor: 'rgb(161, 96, 0)',
  },
  largeWh00t: {
  },
  messages: {
    backgroundColor: '#e9e9e9',
    otherUsernamesColor: '#e37122',
    usernameColor: '#889411',
    botUsernameColor: '#3e999f',
    usernameBaseImageBackgroundColor: '#99a14a',
    otherUsernameBaseImageBackgroundColor: '#c37835',
    timeColor: 'rgb(142, 141, 141)',
    messageText: '#004578',
    aLinkColor: '#5c9bd0',
  },
  chatInput: {
    button: {
      backgroundColor: '#909090',
      color: 'rgb(249, 181, 81)',
    },
    textInput: {
      borderColor: 'grey',
      backgroundColor: '#d4d4d4',
      focusBackgroundColor: '#f2f2f2',
      focusFontColor: '#004578',
    },
    emoji: {
      borderColor: '#8d8e8e',
    },
  },
  chatHeader: {
    backgroundColor: '#707070',
    titleColor: '#de935f',
    titleHighlightColor: 'white',
  },
  connect: {
    labelDescription: '#757575',
  },
};
