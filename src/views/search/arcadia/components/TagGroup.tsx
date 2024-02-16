import {
  AlphabetHeader,
  TagsSection,
  SubTagHeader, SubTagCount,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  LatestTagsListContainer,
  TagGroupSection,
} from '@/views/search/styles/searchStyles';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TagGroupProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { SearchContext } from '@/context/searchContext';
import { TagWithCount } from '@/dataSource/types/apiTypes';

// TODO: Extract the context and feed in as a prop, also find a way to supply this data straight
//  from the DB to reduce formatting processing in the UI

function TagGroup(props: TagGroupProps) {
  const { title, tagList, navigate, highlight } = props;
  const tagsCountHashMap: Map<string, number> = useContext(SearchContext).state.tagsHashMap;

  if (!tagList || tagList.length === 0) {
    return null;
  }

  const tagsWithCount: TagWithCount[] = tagList.map((tag: string) => ({
    tag,
    count: tagsCountHashMap.get(tag) || 0,
  })).slice(0, 20);
  tagsWithCount.sort(
    (a, b) => (a.count < b.count ? 1 : -1),
  );

  return (
    <TagGroupSection>
      <AlphabetHeader>{title}</AlphabetHeader>
      <TagsSection isHighLight={highlight}>
        <LatestTagsListContainer>
          {
            tagsWithCount.map((tagWithCount: TagWithCount) => (
              <Link key={'tagListItem'.concat(tagWithCount.tag)} to={navigate.concat(tagWithCount.tag)}>
                <SubTagHeader
                  style={{
                    minWidth: 'auto',
                    width: 'auto',
                    boxShadow: 'none',
                  }}
                >
                  <span>{tagWithCount.tag}</span>
                  <SubTagCount> {tagWithCount.count}</SubTagCount>
                </SubTagHeader>
              </Link>
            ))
          }
        </LatestTagsListContainer>
      </TagsSection>
    </TagGroupSection>
  );
}

TagGroup.defaultProps = {
  highlight: false,
};

export default TagGroup;
