import {
  ArcResultOuterContainer,
  SubTagCount,
  SubTagHeader,
  SubTagHeaderContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArcResultSubNodeProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { SearchContext } from '@/context/searchContext';

export function ArcResultSubNode(props: ArcResultSubNodeProps) {
  const { node, navigate } = props;
  const tagsCountHashMap: Map<string, number> = useContext(SearchContext).state.tagsHashMap;

  return (
    <div>
      <SubTagHeaderContainer>
        <Link style={{ width: '100%' }} to={navigate.concat(node.subject)}>
          <SubTagHeader id={'SubTagHeader-'.concat(node.subject)}>
            <span>{node.subject}</span>
            <SubTagCount> {tagsCountHashMap.get(node.subject)}</SubTagCount>
          </SubTagHeader>
        </Link>
      </SubTagHeaderContainer>
      <ArcResultOuterContainer>
        {
          node.urls.map((url: any) => (
            <ArcResult
              key={'arcResultItem'.concat(url.id.toString())}
              arcResultPackage={url}
              navigate={navigate}
            />
          ))
        }
      </ArcResultOuterContainer>
    </div>
  );
}
