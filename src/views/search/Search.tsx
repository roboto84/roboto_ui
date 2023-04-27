import React, { useState } from 'react';
import { NavigateFunction, useNavigate, useLocation, Location } from 'react-router-dom';
import { SearchBar } from '@/views/search/components/SearchBar';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { Arcadia } from '@/views/search/arcadia/Arcadia';
import { ArcadiaSearch } from '@/views/search/arcadia/components/ArcadiaSearch';
import {
  LexiconSearchHome,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { ArcadiaView, SearchSystem } from '@/views/search/types/searchTypes';
import { AddSearchRecordButton } from '@/views/search/components/AddSearchRecordButton';
import { AddRecord } from '@/views/search/components/AddRecord/AddRecord';
import { useClickOutside } from '@/hooks/useClickOutside';
import { SearchMainContainer, SearchMenuContainer } from './styles/searchStyles';

export function Search() {
  const [searchContext, setSearchContext] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();
  const [isAddRecordViewable, setIsAddRecordViewable] = useState<boolean>(false);
  const { ref } = useClickOutside(() => {
    setIsAddRecordViewable(false);
  });
  const switchAddRecordFormView = () => {
    setIsAddRecordViewable(!isAddRecordViewable);
  };

  const generalSearch = (url: string, value: string) => {
    if (value !== '') {
      navigate(`${url}${value}`);
    }
  };

  const arcadiaSys: SearchSystem = {
    system: 'Arcadia',
    onHomeClick: () => {
      navigate('/search');
      setSearchContext('');
    },
    onSearchKeyUp: (value: string) => {
      setSearchTerm(value);
      if (location.pathname !== '/search' && location.pathname !== '/search/system/arcadia/index') {
        navigate('/search');
      }
    },
    onSendSearch: (value: string) => {
      setSearchContext(value);
      generalSearch('/search/system/arcadia/data?word=', encodeURIComponent(value));
    },
  };

  const routerConfig: RouterItemConfig[] = [
    {
      index: true,
      element: (
        <Arcadia view={ArcadiaView.MAIN} subTag={searchTerm} setContext={setSearchContext} />
      ),
    },
    {
      path: 'arcadia/index',
      element: (
        <Arcadia view={ArcadiaView.INDEX} subTag={searchTerm} setContext={setSearchContext} />
      ),
    },
    { path: 'lexicon/definition', element: <LexiconSearchHome /> },
    { path: 'arcadia/data', element: <ArcadiaSearch setContext={setSearchContext} /> },
  ];

  return (
    <SearchMainContainer>
      <div ref={ref}>
        <SearchMenuContainer>
          <SearchBar searchSystem={arcadiaSys} />
          <AddSearchRecordButton switchAddFormView={switchAddRecordFormView} />
        </SearchMenuContainer>
        <AddRecord
          isAddRecordViewable={isAddRecordViewable}
          switchAddRecordView={switchAddRecordFormView}
        />
      </div>
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </SearchMainContainer>
  );
}
