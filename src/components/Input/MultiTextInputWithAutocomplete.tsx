import {
  ArcAddInputContainer,
  ArcInput,
  ArcInputTitle,
  AutoCompleteContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { ChangeEventHandler, KeyboardEventHandler, useEffect, useState, useRef } from 'react';
import { appendStringBeforeFirstComma, stripBeforeLastComma } from '@/utils/utils';
import { IStringIndexedObject } from '@/views/search/types/searchTypes';

type MultiTextInputWithAutocompleteProps = {
  label ?: string,
  title: string,
  defaultValue ?: string,
  autocompleteOptions: string[],
  isInputActive ?: boolean,
  inputRef: React.MutableRefObject<any>,
}

function MultiTextInputWithAutocomplete(props: MultiTextInputWithAutocompleteProps) {
  const { label, defaultValue, title, autocompleteOptions, isInputActive, inputRef } = props;
  const [inputValue, setInputValue] = useState('');
  const [showAutoCompleteOptions, setShowAutoCompleteOptions] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [listValues, setListValues] = useState([]);
  const itemRefs: React.MutableRefObject<IStringIndexedObject> = useRef({});

  useEffect(() => {
    if (inputValue !== '') {
      const MAX_OPTIONS: number = 50;
      const filteredOptions: string[] = autocompleteOptions.filter((item) => item.includes(
        stripBeforeLastComma(inputValue),
      )).slice(0, MAX_OPTIONS);

      if (filteredOptions.length > 0) {
        setListValues(filteredOptions);
        setShowAutoCompleteOptions(true);
      } else {
        setShowAutoCompleteOptions(false);
      }
    } else {
      setShowAutoCompleteOptions(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (itemRefs.current[`${activeItemIndex}`]) {
      itemRefs.current[`${activeItemIndex}`].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeItemIndex]);

  const addOptionToInput = (capturedTag: string) => {
    if (capturedTag !== '') {
      const newInputValue: string = appendStringBeforeFirstComma(
        inputRef.current.value,
        capturedTag,
      );
      setInputValue('');
      setListValues([]);
      setActiveItemIndex(0);
      inputRef.current.value = newInputValue;
    }
  };

  const onInputChange: ChangeEventHandler = () => {
    setInputValue(inputRef.current.value);
  };

  const handleBlur = () => {
    setShowAutoCompleteOptions(false);
  };

  const onInputKeydown: KeyboardEventHandler = (e) => {
    const specialKeys: string[] = ['ArrowUp', 'ArrowDown', 'Enter', 'Escape'];

    if (specialKeys.includes(e.key)) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveItemIndex((prevIndex) => Math.min(prevIndex + 1, listValues.length - 1));
      } else if (e.key === 'Enter') {
        if (showAutoCompleteOptions) {
          e.preventDefault();
          setShowAutoCompleteOptions(false);
          addOptionToInput(listValues[activeItemIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowAutoCompleteOptions(false);
        setInputValue('');
        setListValues([]);
        setActiveItemIndex(0);
      }
    }
  };

  const addOptionOnclick = (index: number) => {
    // Needed for pushing this action to the end of the call stack, in case other functions need
    // to resolve before the <li> elements disappear. An example is the useClickOutside hook.
    setTimeout(() => {
      addOptionToInput(listValues[index]);
      inputRef.current.focus();
    }, 0);
  };

  const addToListItemRefs = (index: number, e: HTMLLIElement) => {
    itemRefs.current[`${index}`] = e;
  };

  const autoCompleteOptionList: JSX.Element[] = listValues.map((item: string, index: number) => (
    <li
      key={item}
      ref={(e: HTMLLIElement) => (addToListItemRefs(index, e))}
      onMouseEnter={() => setActiveItemIndex(index)}
      onMouseDown={() => addOptionOnclick(index)}
      className={index === activeItemIndex ? 'active' : ''}
    >
      {item}
    </li>
  ));

  return (
    <ArcAddInputContainer onBlur={handleBlur}>
      <ArcInputTitle>{label}</ArcInputTitle>
      <ArcInput
        title={title}
        type="text"
        defaultValue={defaultValue}
        ref={inputRef}
        disabled={!isInputActive}
        onKeyDown={onInputKeydown}
        onChange={onInputChange}
      />
      <AutoCompleteContainer show={showAutoCompleteOptions}>
        {autoCompleteOptionList}
      </AutoCompleteContainer>
    </ArcAddInputContainer>
  );
}

MultiTextInputWithAutocomplete.defaultProps = {
  label: '',
  defaultValue: '',
  isInputActive: true,
};

export default MultiTextInputWithAutocomplete;
