import {
  ArcEditButtonsContainer,
  ArcEditFieldContainer,
  ArcEditFormContainer,
  ArcEditFormInputGroupContainer,
  ArcInput,
  ArcInputTextArea,
  ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  ArcEditPackage,
  ArcResultDisplay,
  ArcResultEditViewProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useRef, useEffect, useContext, FormEventHandler } from 'react';
import { FocusableButton } from '@/components/Nav/Button';
import MultiTextInputWithAutocomplete from '@/components/Input/MultiTextInputWithAutocomplete';
import { SearchContext } from '@/context/searchContext';

export function ArcResultEditForm(props: ArcResultEditViewProps) {
  const { state } = useContext(SearchContext);
  const { itemKey, tags, title, description, image, onReset, onEdit } = props;
  const imageInputRef: React.MutableRefObject<any> = useRef();
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();
  const titleInputRef: React.MutableRefObject<any> = useRef();
  const descriptionInputRef: React.MutableRefObject<any> = useRef();
  const DescriptionInputCharacterMaxLength: number = 950;
  const InputCharacterMaxLength: number = 200;
  const InputCharacterMinLength: number = 4;

  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const editItem = () => {
    const tagsFromInput: string = tagsInputRef.current.value.endsWith(',')
      ? tagsInputRef.current.value.substring(0, tagsInputRef.current.value.length - 1)
      : tagsInputRef.current.value;

    const editItemPackage: ArcEditPackage = {
      data: itemKey,
      dataUpdate: urlInputRef.current.value,
      tags: String(tagsFromInput.toLowerCase()).replace(/\s+/g, '').split(','),
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      image: imageInputRef.current.value,
    };
    onEdit(editItemPackage);
  };

  const resetEditView = () => {
    onReset(ArcResultDisplay.VIEW);
  };

  const handleSubmit: FormEventHandler = (e): void => {
    e.preventDefault();
    editItem();
  };

  return (
    <ArcEditFormContainer onSubmit={handleSubmit}>
      <ArcEditFormInputGroupContainer>
        <ArcEditFieldContainer>
          <div>
            <ArcInputTitle>Title</ArcInputTitle>
            <ArcInput
              title="Title Edit"
              type="text"
              minLength={InputCharacterMinLength}
              maxLength={InputCharacterMaxLength}
              defaultValue={title}
              ref={titleInputRef}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <ArcInputTitle>URL</ArcInputTitle>
            <ArcInput
              title="URL Edit"
              type="text"
              minLength={InputCharacterMinLength}
              maxLength={InputCharacterMaxLength}
              defaultValue={itemKey}
              ref={urlInputRef}
            />
          </div>
          <MultiTextInputWithAutocomplete
            label="Tags (comma separated)"
            title="Tags Edit"
            defaultValue={tags}
            autocompleteOptions={state.tags}
            inputRef={tagsInputRef}
            isForcedLowercase
          />
        </ArcEditFieldContainer>
        <ArcEditFieldContainer>
          <div>
            <ArcInputTitle>Image</ArcInputTitle>
            <ArcInput
              title="Image Edit"
              type="text"
              minLength={InputCharacterMinLength}
              maxLength={InputCharacterMaxLength}
              defaultValue={image}
              ref={imageInputRef}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <ArcInputTitle>Description</ArcInputTitle>
            <ArcInputTextArea
              title="Description Edit"
              rows={5}
              maxLength={DescriptionInputCharacterMaxLength}
              defaultValue={description}
              ref={descriptionInputRef}
              autoComplete="off"
            />
          </div>
        </ArcEditFieldContainer>
      </ArcEditFormInputGroupContainer>
      <ArcEditButtonsContainer>
        <FocusableButton
          type="button"
          fontSize="14px"
          padding="5px 15px"
          margin="10px"
          borderRadius="5px"
          onClick={resetEditView}
          title="Cancel"
        >
          Cancel
        </FocusableButton>
        <FocusableButton
          type="submit"
          fontSize="14px"
          padding="5px 15px"
          margin="10px"
          borderRadius="5px"
          title="Update"
        >
          Update
        </FocusableButton>
      </ArcEditButtonsContainer>
    </ArcEditFormContainer>
  );
}
