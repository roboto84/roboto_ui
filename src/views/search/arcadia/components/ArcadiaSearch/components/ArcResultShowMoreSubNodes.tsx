import { Button } from '@/components/Nav/Button';
import { TbEyeglass2 } from 'react-icons/tb';
import { ArcadiaMoreResultsButtonContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcResultShowMoreSubNodesProps } from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcSearchResultSubNodes,
} from '@/views/search/arcadia/components/ArcadiaSearch/components/ArcSearchResultSubNodes';

export function ArcResultShowMoreSubNodes(props: ArcResultShowMoreSubNodesProps) {
  const { subNodeProps, showSubNodes, setShowSubNodes } = props;

  const showMoreButton : JSX.Element = (
    <ArcadiaMoreResultsButtonContainer>
      <Button
        fontSize="1.2rem"
        letterSpacing="2px"
        padding="6px 8px"
        margin="3px"
        borderRadius="5px"
        onClick={() => setShowSubNodes(true)}
        title="Copy Link"
      >
        <TbEyeglass2 /><span> View {subNodeProps.subNodesCount} More Results</span>
      </Button>
    </ArcadiaMoreResultsButtonContainer>
  );

  if (!showSubNodes) {
    return showMoreButton;
  }

  return (
    <ArcSearchResultSubNodes
      subject={subNodeProps.subject}
      subNodesCount={subNodeProps.subNodesCount}
      tagCache={subNodeProps.tagCache}
      subNodes={subNodeProps.subNodes}
      navLocation={subNodeProps.navLocation}
    />
  );
}
