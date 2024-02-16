import React, { useState } from 'react';
import { NavigateFunction, useNavigate, useLocation } from 'react-router-dom';
import { SearchBar } from '@/views/search/components/SearchBar';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { Arcadia } from '@/views/search/arcadia/Arcadia';
import { ArcadiaSearch } from '@/views/search/arcadia/components/ArcadiaSearch/ArcadiaSearch';
import { LexiconSearchHome } from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { ArcadiaView, SearchSystem } from '@/views/search/types/searchTypes';
import { AddSearchRecordButton } from '@/views/search/components/AddSearchRecordButton';
import { AddRecord } from '@/views/search/components/AddRecord/AddRecord';
import { openInNewTab, quickSearchSystems } from '@/views/search/arcadia/utils';
import { useClickOutside } from '@/hooks/useClickOutside';
import SearchProvider from '@/context/searchContext';
import { SearchMainContainer, SearchRefContainer, SearchMenuContainer } from './styles/searchStyles';

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();
  const { pathname } = useLocation();
  const [isAddRecordViewable, setIsAddRecordViewable] = useState<boolean>(false);
  const { ref } = useClickOutside(() => {
    setIsAddRecordViewable(false);
  });

  const activateAddRecordFormView = () => {
    setIsAddRecordViewable(true);
  };

  const hideAddRecordFormView = () => {
    setIsAddRecordViewable(false);
  };

  const generalSearch = (url: string, generalSearchTerm: string) => {
    if (generalSearchTerm !== '') {
      let quickSearchUrl: string;
      Object.keys(quickSearchSystems).forEach((key: string) => {
        const quickSearchKey = `!${key}`;
        if (generalSearchTerm.indexOf(quickSearchKey) > -1) {
          quickSearchUrl = quickSearchSystems[key](
            generalSearchTerm.replace(quickSearchKey, ''),
          );
        }
      });

      if (quickSearchUrl) {
        openInNewTab(quickSearchUrl);
      } else {
        navigate(`${url}${generalSearchTerm}`);
      }
    }
  };

  const arcadiaSys: SearchSystem = {
    system: 'Arcadia',
    onHomeClick: () => {
      navigate('/search');
    },
    onSearchKeyUp: (value: string) => {
      setSearchTerm(value);
      if (pathname !== '/search' && pathname !== '/search/system/arcadia/index') {
        navigate('/search');
      }
    },
    onSendSearch: (value: string) => {
      generalSearch('/search/system/arcadia/data?word=', encodeURIComponent(value));
    },
  };

  const routerConfig: RouterItemConfig[] = [
    {
      index: true,
      element: (
        <Arcadia view={ArcadiaView.MAIN} searchTerm={searchTerm} />
      ),
    },
    {
      path: 'arcadia/index',
      element: (
        <Arcadia view={ArcadiaView.INDEX} searchTerm={searchTerm} />
      ),
    },
    { path: 'lexicon/definition', element: <LexiconSearchHome /> },
    { path: 'arcadia/data', element: <ArcadiaSearch /> },
  ];

  return (
    <SearchProvider>
      <SearchMainContainer>
        <SearchRefContainer ref={ref}>
          <SearchMenuContainer>
            <SearchBar searchSystem={arcadiaSys} />
            <AddSearchRecordButton activateAction={activateAddRecordFormView} />
          </SearchMenuContainer>
          <AddRecord
            isAddRecordViewable={isAddRecordViewable}
            cancelAddRecordFormView={hideAddRecordFormView}
          />
        </SearchRefContainer>
        <RoutesGenerator routerRoutesConfig={routerConfig} />
      </SearchMainContainer>
    </SearchProvider>
  );
}
