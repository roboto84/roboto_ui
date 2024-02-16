import { InlineHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcSearchPageHeaderProps, ArcSearchHeaderType } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcSearchPageHeader(props: ArcSearchPageHeaderProps) {
  const { numOfResults, numOfTags, subject, type } = props;
  const startPartialSentence: string = type === ArcSearchHeaderType.MAIN
    ? 'tag'
    : 'other';
  const midPartialSentence: string = type === ArcSearchHeaderType.MAIN
    ? 'with'
    : 'in';

  return (
    <h1 style={{ marginLeft: '0' }}>
      <InlineHeader>{numOfResults} </InlineHeader>
      <span>{startPartialSentence} result{numOfResults === 1 ? '' : 's'} for</span>
      <InlineHeader> {subject} </InlineHeader>
      { numOfTags > 1 ? midPartialSentence.concat(' the following tags ...') : '...'}
    </h1>
  );
}
