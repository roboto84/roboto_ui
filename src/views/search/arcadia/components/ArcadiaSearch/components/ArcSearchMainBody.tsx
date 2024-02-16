import {
  ArcSearchMainBodyProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useState } from 'react';
import {
  ArcadiaNoResults,
  ArcadiaNoResultsText,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import Icon from '@/components/Images/Icon';
import {
  ArcSearchResultMainNode,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchResultMainNode';
import {
  ArcResultShowMoreSubNodes,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcResultShowMoreSubNodes';

export function ArcSearchMainBody(props: ArcSearchMainBodyProps) {
  const {
    hasVariousResults,
    hasSomeResults,
    subject,
    mainNode,
    mainNodeTags,
    subNodesCount,
    subNodes,
    tagCache,
    navLocation,
  } = props;
  const [showSubNodes, setShowSubNodes] = useState(false);

  if (!hasSomeResults) {
    return (
      <>
        <hr />
        <ArcadiaNoResults>
          <span><Icon robotType="GiRobotAntennas" /></span>
          <ArcadiaNoResultsText>No Bind Results</ArcadiaNoResultsText>
        </ArcadiaNoResults>
      </>
    );
  }

  return (
    <>
      <ArcSearchResultMainNode
        subject={subject}
        mainNode={mainNode}
        mainNodeTags={mainNodeTags}
        tagCache={tagCache}
        navLocation={navLocation}
      />
      {hasVariousResults ? <hr /> : '' }
      <ArcResultShowMoreSubNodes
        subNodeProps={{
          subject,
          subNodesCount,
          subNodes,
          tagCache,
          navLocation,
        }}
        showSubNodes={showSubNodes}
        setShowSubNodes={setShowSubNodes}
      />
    </>
  );
}
