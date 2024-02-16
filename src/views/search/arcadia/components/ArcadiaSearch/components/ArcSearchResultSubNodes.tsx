import {
  ArcResultPackage,
  ArcSearchHeaderType, ArcSearchResultsNode,
  ArcSearchResultSubNodesProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useState } from 'react';
import {
  ArcSearchPageHeader,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchPageHeader';
import {
  ArcSearchPageInnerLinks,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchPageInnerLinks';
import {
  ArcResultSubNode,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcResultSubNode';
import { arraysAreEqual } from '@/utils/utils';

export function ArcSearchResultSubNodes(props: ArcSearchResultSubNodesProps) {
  const { subject, subNodesCount, tagCache, subNodes, navLocation } = props;
  const [activeTagArray, setActiveTagArray] = useState([]);

  if (subNodesCount === 0) {
    return null;
  }

  const updateTagPerspective = (newTagArray: string[]) => {
    const newArray: string[] = arraysAreEqual(newTagArray, activeTagArray) ? [] : newTagArray;
    setActiveTagArray(newArray);
  };

  const tagFilteredResults: ArcSearchResultsNode[] = activeTagArray.length > 0
    ? subNodes.filter((subNode) => activeTagArray.includes(subNode.subject))
    : subNodes;

  return (
    <div>
      <ArcSearchPageHeader
        numOfResults={subNodesCount}
        numOfTags={tagCache.length}
        subject={subject}
        type={ArcSearchHeaderType.SUB}
      />
      <ArcSearchPageInnerLinks tags={tagCache} updateTagPerspective={updateTagPerspective} />
      <div>
        {
          tagFilteredResults.map(
            (element: ArcSearchResultsNode) => (
              <ArcResultSubNode
                key={'subNodeSubject'.concat(element.subject)}
                node={element}
                navigate={navLocation}
              />
            ),
          )
        }
      </div>
    </div>
  );
}
