import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const LexiconContainer = styled.div`
  font-size: 20px;
  margin: 20px 0 0 50px;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
  padding-top: 20px;
`;

export const LexiconHoverable = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  min-width: 170px;
  transition: 0.4s;

  :hover{
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  }
`;
