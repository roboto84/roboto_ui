import React from 'react';
import { Wh00tMessageProps } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tBaseUserImage } from '@/views/wh00t/components/Wh00tMessage/components/Wh00tBaseUserImage';
import { getLocalStandardDateTime, simpleMonthDateFormat } from '@/utils/formatting';
import {
  Wh00tMessageText,
} from '@/views/wh00t/components/Wh00tMessage/components/Wh00tMessageText';
import {
  Wh00tMessageBody,
  Wh00tMessageTime,
  Wh00tMessageTitle,
  Wh00tMessageUsername,
  Wh00tMessageWrapper,
} from './styles/wh00tMessageStyle';

export function Wh00tMessage(props: Wh00tMessageProps) {
  const { currentClientId, messagePackage } = props;

  if (messagePackage) {
    const usernameColor: string = currentClientId === messagePackage.username
      ? 'wh00tUsernameColor' : 'wh00tOtherUsernamesColor';
    const localTime: string = messagePackage.time.indexOf('Z') > -1
      ? getLocalStandardDateTime(true, messagePackage.time)
      : messagePackage.time;

    const messageTimeParts: string[] = localTime.split('-');
    const messageTime: string = messageTimeParts[0] === simpleMonthDateFormat()
      ? messageTimeParts[1]
      : `${messageTimeParts[0]} ${messageTimeParts[1]}`;

    return (
      <Wh00tMessageWrapper>
        <Wh00tBaseUserImage
          currentClientId={currentClientId}
          username={messagePackage.username}
        />
        <Wh00tMessageBody>
          <Wh00tMessageTitle>
            <Wh00tMessageUsername className={usernameColor}>
              {`${messagePackage.username} `}
            </Wh00tMessageUsername>
            <Wh00tMessageTime dateTime={messageTime}>
              {`${messageTime}`}
            </Wh00tMessageTime>
          </Wh00tMessageTitle>
          <Wh00tMessageText
            username={messagePackage.username}
            messageSource={messagePackage.source}
            messageText={messagePackage.message}
          />
        </Wh00tMessageBody>
      </Wh00tMessageWrapper>
    );
  }

  return null;
}
