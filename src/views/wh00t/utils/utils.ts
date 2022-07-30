import { BASE_UI_URL } from '@/dataSource/urls';

const emojiRegex = require('emoji-regex');

const globalUrlRegex = /((http|ftp|https):\/\/)?([\w_-]+(?:\.[\w_-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/ig;
const singleUrlRegex = /((http|ftp|https):\/\/)?([\w_-]+(?:\.[\w_-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/i;
const emojiReg = emojiRegex();

export function linkify(message: string): string {
  if (!message) return '';
  return message.replace(globalUrlRegex, (url) => {
    let hyperlink = url;
    if (!hyperlink.match('^https?://')) {
      hyperlink = `https://${hyperlink}`;
    }
    return `<a href="${hyperlink}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

export function emojify(message: string): string {
  if (!message) return '';
  return message.replace(emojiReg, (emoji) => (
    `<span style="font-size: 28px;">${emoji}</span>`));
}

export function isHyperlinkLink(text: string) {
  return singleUrlRegex.test(text);
}

export function isImageLink(text: string) {
  return isHyperlinkLink(text) && (text.endsWith('.png') || text.endsWith('.jpg')
    || text.endsWith('.jpeg') || text.endsWith('.webp') || text.endsWith('.gif')
    || text.endsWith('.gifv'));
}

export function openPopup() {
  const params: string = 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=575,height=475';
  window.open(`${BASE_UI_URL}/wh00t/`, 'test', params);
  window.open(`${BASE_UI_URL}/`, '_self');
}

export function noneTokenTextTransform(text: string): string {
  let transformedText: string = linkify(text);
  transformedText = emojify(transformedText);
  return transformedText;
}

export function userIsBot(username: string): boolean {
  return username.substring(username.length - 4) === '_bot';
}
