import { SubTagHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import { TagDirectoryNodeProps } from '@/views/search/arcadia/types/arcadiaTypes';

function TagDirectoryNode(props: TagDirectoryNodeProps) {
  const { tag, isActive, selectedCallback } = props;
  const [isActiveInternal, setIsActiveInternal] = useState(isActive);

  const resolveActiveState = () => {
    if (isActive === null) {
      setIsActiveInternal(!isActiveInternal);
    } else {
      setIsActiveInternal(isActive);
    }
    selectedCallback(tag);
  };

  return (
    <SubTagHeader
      className={(isActive === null ? isActiveInternal : isActive) && 'active'}
      style={{ minWidth: 'auto', width: 'auto', fontSize: '16px' }}
      onClick={() => resolveActiveState()}
    >
      {tag}
    </SubTagHeader>
  );
}

TagDirectoryNode.defaultProps = {
  isActive: null,
};

export default TagDirectoryNode;
