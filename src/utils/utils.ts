import { v4 as uuidv4 } from 'uuid';
import { getD3StandardDateTime } from '@/utils/formatting';

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomUuid(): string {
  return uuidv4();
}

export function timeFormatMorph(timeStamp: string):string {
  let timeMorph: string = timeStamp.substring(0, timeStamp.lastIndexOf('-'));
  if (timeStamp.indexOf('Z') > -1) {
    timeMorph = getD3StandardDateTime(timeStamp);
  } else if (timeMorph.indexOf('.') > 0) {
    timeMorph = timeMorph.substring(0, timeMorph.lastIndexOf('.'));
  }
  return timeMorph;
}

export function acceptableCharactersTest(key: string):boolean {
  const nonAcceptableKeys = [
    'Control',
    'Shift',
    'Alt',
    'AltGraph',
    'Control',
    'ArrowUp',
    'ArrowDown',
    'Shift',
    'CapsLock',
    'Fn',
    'Meta',
    'NumLock',
    'ScrollLock',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'End',
    'Home',
    'PageDown',
    'PageUp',
    'Escape',
  ];

  return nonAcceptableKeys.indexOf(key) === -1;
}

export const appendStringBeforeFirstComma = (firstString: string, secondString: string): string => {
  const lastCommaIndex = firstString.lastIndexOf(',');
  if (lastCommaIndex !== -1) {
    const substring = firstString.slice(0, lastCommaIndex + 1);
    return `${substring}${secondString},`;
  }
  return `${secondString},`;
};

export const stripBeforeLastComma = (inputString: string): string => {
  const lastCommaIndex = inputString.lastIndexOf(',');
  if (lastCommaIndex !== -1) {
    return inputString.slice(lastCommaIndex + 1).trim();
  }
  return inputString;
};

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // do nothing for now
  }
}

export function arraysAreEqual(array1: string[], array2: string[]): boolean {
  return array1.length === array2.length && array1.every(
    (value, index) => value === array2[index],
  );
}
