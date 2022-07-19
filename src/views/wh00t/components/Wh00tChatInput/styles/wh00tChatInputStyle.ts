/* Chat Input */
import styled from 'styled-components';
import { Button } from '@/components/Nav/Button';
import { InputTextArea } from '@/components/Input/InputTextArea';
import { GlobalThemeType } from '@/types';
import { EmojiSelectorContainerProps } from '@/views/wh00t/types/wh00tTypes';

export const Wh00tChatInputContainer = styled.div`
`;

export const ChatInputButtonContainer = styled.div`
  display: flex;
`;

export const ChatInputButton = styled(Button)`
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 0;
  font-size: ${(props) => (props.fontSize || '16px')};
  font-weight: bold;
  margin: 0 0 0 5px;
  padding: ${(props) => (props.padding || '13px')};
  color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.color};
  border-radius: 5px;
  
  :hover, &.active {
    background-color: rgb(179, 107, 0);
  }
`;

export const Wh00tInputTextArea = styled(InputTextArea)`
  width: calc(100% - 157px);
  height: 22px;
  border-radius: 3px;
`;

export const Wh00tChatForm = styled.form`
  display: flex;
  padding-left: 5px;
`;

export const EmojiUnitContainer = styled.div`
  display: flex;
`;

export const EmojiSelectorContainer = styled.div<EmojiSelectorContainerProps>`
  width: 204px;
  height: 273px;
  background-color: ${(props: EmojiSelectorContainerProps) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 1px solid ${(props: EmojiSelectorContainerProps) => props.theme.wh00t.chatInput.emoji.borderColor};
  border-radius: 3px;
  display: ${(props: EmojiSelectorContainerProps) => props.display};
  flex-wrap: wrap;
  padding: 10px;
  position: absolute;
  margin-top: -300px;
  margin-left: -182px;
  overflow-y: scroll;
`;

export const EmojiContainer = styled.div`
  font-size: 20px;
  padding: 6px;
  background: inherit;
  border-radius: 5px;
  
  :hover {
    background: #eee;
    cursor: pointer;
  }
`;
