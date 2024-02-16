import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import TagGroup from '@/views/search/arcadia/components/TagGroup';
import {
  ArcSearchResults,
} from '@/views/search/arcadia/types/arcadiaTypes';
import LexiconCard from '@/views/search/lexicon/components/lexiconCard/LexiconCard';
import { organizeNodes } from '@/views/search/arcadia/utils';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTagsWithCounts } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import { SearchContext } from '@/context/searchContext';
import { SearchActionsEnum } from '@/context/types/enums';
import {
  ArcSearchMainBody,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchMainBody';
import {
  ArcadiaContainer,
  ArcInitialDataContainer,
} from '../../styles/arcadiaStyles';

export function ArcadiaSearch() {
  const { state, dispatch } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const navLocation: string = '/search/system/arcadia/data?word=';
  const { data, isLoading, isError } = useArcadiaWordSearch(searchWord);
  const arcadiaSubjectsWithCounts: UseQueryResult<ArcadiaTagsWithCounts> = useQuery<
    ArcadiaTagsWithCounts, Error>(arcadiaApiEndpoints.tagsWithCounts, {
      onSuccess: (arcadiaSubjectsWithCountsData: ArcadiaTagsWithCounts) => {
        const camelCasedData: ArcadiaTagsWithCounts = camelcaseKeys<ArcadiaTagsWithCounts>(
          arcadiaSubjectsWithCountsData,
          { deep: true },
        );

        if (state.tags.length !== camelCasedData.numberOfSubjects) {
          dispatch({ type: SearchActionsEnum.LOAD_TAGS, value: camelCasedData.subjectsCounts });
        }
      },
    });

  if (isLoading || arcadiaSubjectsWithCounts.isLoading) {
    return (<Loader />);
  }

  if (isError || arcadiaSubjectsWithCounts.isError) {
    const message: string = 'Error has occurred getting search data or subjects';
    return (<ErrorViewDefault errorMessage={message} />);
  }

  const { searchResults, similarTags } = camelcaseKeys<ArcSearchResults>(data, { deep: true });
  const { urlCache, tagCache } = organizeNodes(searchResults);
  const mainNodeLength: number = searchResults.mainNode ? searchResults.mainNode.urls.length : 0;
  const subNodesCount: number = urlCache.length - mainNodeLength;
  const hasVariousResults: boolean = Boolean(searchResults.mainNode) && subNodesCount > 0;
  const hasSomeResults: boolean = Boolean(searchResults.mainNode) || subNodesCount > 0;
  const associatedMainNodeTagsSet: Set<string> = new Set();

  if (searchResults.mainNode) {
    searchResults.mainNode.urls.forEach((url) => {
      url.tags.forEach((tag) => {
        if (tag !== searchResults.subject) {
          associatedMainNodeTagsSet.add(tag);
        }
      });
    });
  }

  return (
    <ArcadiaContainer>
      <ArcInitialDataContainer>
        <TagGroup title="Similar Tags" tagList={similarTags} navigate={navLocation} />
        <LexiconCard title="Dictionary" searchTerm={searchResults.subject} />
      </ArcInitialDataContainer>
      <GeneralSection>
        <ArcSearchMainBody
          hasVariousResults={hasVariousResults}
          hasSomeResults={hasSomeResults}
          subject={searchResults.subject}
          mainNode={searchResults.mainNode}
          mainNodeTags={Array.from(associatedMainNodeTagsSet)}
          subNodesCount={subNodesCount}
          subNodes={searchResults.subNode}
          tagCache={tagCache}
          navLocation={navLocation}
        />
      </GeneralSection>
    </ArcadiaContainer>
  );
}
