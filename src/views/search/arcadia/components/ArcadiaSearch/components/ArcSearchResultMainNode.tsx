import React, { useState } from 'react';
import {
  ArcResultPackage,
  ArcSearchHeaderType,
  ArcSearchResultMainNodeProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcSearchPageHeader,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchPageHeader';
import {
  ArcSearchPageInnerLinks,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchPageInnerLinks';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import { arraysAreEqual } from '@/utils/utils';

export function ArcSearchResultMainNode(props: ArcSearchResultMainNodeProps) {
  const { subject, mainNode, mainNodeTags, tagCache, navLocation } = props;
  const [activeTagArray, setActiveTagArray] = useState([]);

  if (!mainNode) {
    return null;
  }

  const updateTagPerspective = (newTagArray: string[]) => {
    const newArray: string[] = arraysAreEqual(newTagArray, activeTagArray) ? [] : newTagArray;
    setActiveTagArray(newArray);
  };

  const tagFilteredResults: ArcResultPackage[] = activeTagArray.length > 0
    ? mainNode.urls.filter((url) => url.tags.some((tag) => activeTagArray.includes(tag)))
    : mainNode.urls;

  return (
    <div>
      <ArcSearchPageHeader
        numOfResults={tagFilteredResults.length}
        numOfTags={tagCache.length}
        subject={subject}
        type={ArcSearchHeaderType.MAIN}
      />
      <ArcSearchPageInnerLinks tags={mainNodeTags} updateTagPerspective={updateTagPerspective} />
      <div>
        {
          tagFilteredResults.map((url: any) => (
            <ArcResult
              key={'arcResultItem'.concat(url.id.toString())}
              arcResultPackage={url}
              navigate={navLocation}
            />
          ))
        }
      </div>
    </div>
  );
}
