import { InnerLinks } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import { ArcSearchPageInnerLinksProps } from '@/views/search/arcadia/types/arcadiaTypes';
import TagDirectoryNode from '@/views/search/arcadia/components/ArcadiaSearch/components/TagDirectoryNode';

export function ArcSearchPageInnerLinks(props: ArcSearchPageInnerLinksProps) {
  const { tags, updateTagPerspective } = props;
  const [activeTag, setActiveTag] = useState(null);

  if (!tags || tags.length === 0) {
    return null;
  }

  const sortedTags = [...tags].sort();
  const resolveTagArray = (selectedTag: string) => {
    const newSet: Set<string> = new Set();
    newSet.add(selectedTag);
    updateTagPerspective(Array.from(newSet));
    setActiveTag(selectedTag === activeTag ? null : selectedTag);
  };

  return (
    <InnerLinks>
      {
        sortedTags.map((tag: string) => (
          <TagDirectoryNode
            key={'tagDirectoryNode'.concat(tag)}
            tag={tag}
            selectedCallback={resolveTagArray}
            isActive={tag === activeTag}
          />
        ))
      }
    </InnerLinks>
  );
}
