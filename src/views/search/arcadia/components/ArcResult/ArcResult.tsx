import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import {
  ArcResultProps,
  ArcResultDisplay,
  ArcResultPackage, ArcResultEditingPackage,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultView } from '@/views/search/arcadia/components/ArcResult/components/ArcResultView';
import { ArcResultDelete } from '@/views/search/arcadia/components/ArcResult/components/ArcResultDelete/ArcResultDelete';
import { ArcResultEdit } from '@/views/search/arcadia/components/ArcResult/components/ArcResultEdit/ArcResultEdit';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage, onSubTagClick } = props;
  const [display, setDisplay] = useState<string>(ArcResultDisplay.VIEW);
  const [editMessage, setEditMessage] = useState<string>('');
  const [resultPackage, setResultPackage] = useState<ArcResultPackage>(arcResultPackage);
  let body: JSX.Element;

  const updateResultOnEdit = (editingPackage: ArcResultEditingPackage):void => {
    setResultPackage({
      id: resultPackage.id,
      timeStamp: resultPackage.timeStamp,
      data: editingPackage.itemPackage.dataUpdate,
      tags: editingPackage.itemPackage.tags,
      dataType: resultPackage.dataType,
      title: editingPackage.itemPackage.title,
      description: editingPackage.itemPackage.description,
      image: editingPackage.itemPackage.image,
    });
    setEditMessage(editingPackage.editingMessage);
    setDisplay(ArcResultDisplay.VIEW);
    setTimeout(() => setEditMessage(''), 5000);
  };

  if ('id' in arcResultPackage) {
    if (display === ArcResultDisplay.VIEW) {
      body = (
        <ArcResultView
          arcResultPackage={resultPackage}
          onDelete={setDisplay}
          onEdit={setDisplay}
          onSubTagClick={onSubTagClick}
          displayMessage={editMessage}
        />
      );
    } else if (display === ArcResultDisplay.DELETE) {
      body = <ArcResultDelete itemKey={resultPackage.data} onReset={setDisplay} />;
    } else if (display === ArcResultDisplay.EDIT) {
      body = (
        <ArcResultEdit
          itemKey={resultPackage.data}
          image={resultPackage.image}
          tags={resultPackage.tags.join(',')}
          title={resultPackage.title}
          description={resultPackage.description}
          onReset={setDisplay}
          onEditConfirmed={updateResultOnEdit}
        />
      );
    }
  } else {
    body = <span>Entry not available</span>;
  }

  return (
    <ArcResultContainer>
      {body}
    </ArcResultContainer>
  );
}
