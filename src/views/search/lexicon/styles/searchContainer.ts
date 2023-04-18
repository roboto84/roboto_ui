import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Nav/Button';

export const SearchContainer = styled.menu`
  all: unset;
  font-size: 13px;
  display: flex;
  height: 70px;
`;

export const SearchInput = styled(Input)`
  width: 500px;
  min-width: 100px;
  margin: 13px 0;
  border-radius: 5px 0 0 5px;
`;

export const LexiconButton = styled(Button)`
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.color};
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  margin: 13px 0;
`;

export const BackButton = styled(LexiconButton)`
  font-size: 24px;
  padding-top: 6px;
`;

export const SearchButton = styled(LexiconButton)`
  font-size: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HomeButton = styled(LexiconButton)`
  font-size: 26px;
  padding-top: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
