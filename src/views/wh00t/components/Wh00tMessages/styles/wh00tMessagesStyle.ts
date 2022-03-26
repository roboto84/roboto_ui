/* Wh00t Main Chat Representation */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Wh00tMessagesContainer = styled.div`
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.backgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.messageText};
  margin: 0 5px 5px 5px;
  font-family: verdana,serif;
  font-size: 17px;
  line-height: 1.5;
  padding: 5px;
  overflow-y: auto;
  height: calc(100% - 105px);
  border-radius: 5px;

  a:link, a:visited {
    color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.aLinkColor};
  }
`;
