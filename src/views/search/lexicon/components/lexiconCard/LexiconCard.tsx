import React, { useState } from 'react';
import { AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import { GiSpellBook } from 'react-icons/gi';
import {
  GeneralDictionarySection,
  IconContainer,
  LexiconCardContainer,
  LexiconCardExternalContainer,
  LexiconOverviewContainer,
} from '@/views/search/lexicon/styles/lexiconCardStyles';
import { LexiconCardProps } from '@/views/search/lexicon/types/lexiconTypes';
import { LexiconCardView } from '@/views/search/lexicon/components/lexiconCard/LexiconCardView';
import { dictionarySearchTermValidator } from '@/views/search/arcadia/utils';
import { Size } from '@/types';
import {
  LexiconSearchDefinition,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';
import {
  LexiconConfirmSearch,
} from '@/views/search/lexicon/components/lexiconCard/LexiconConfirmSearch';

function LexiconCard(props: LexiconCardProps) {
  const { title, searchTerm, definition } = props;
  const [shouldGlobalSearchDefinition, setShouldGlobalSearchDefinition] = useState<boolean>(false);
  const displayDictionaryDefinition = (definition || dictionarySearchTermValidator(searchTerm));

  if (displayDictionaryDefinition) {
    let definitionView: JSX.Element;
    if (definition) {
      definitionView = <LexiconSearchDefinition size={Size.small} wordDefinition={definition} />;
    } else if (shouldGlobalSearchDefinition) {
      definitionView = (
        <LexiconCardView
          searchTerm={searchTerm}
        />
      );
    } else {
      definitionView = (
        <LexiconConfirmSearch
          searchTerm={searchTerm}
          shouldSearch={setShouldGlobalSearchDefinition}
        />
      );
    }

    return (
      <LexiconCardExternalContainer>
        <GeneralDictionarySection>
          <AlphabetHeader>{title}</AlphabetHeader>
          <LexiconCardContainer>
            <IconContainer>
              <GiSpellBook />
            </IconContainer>
            <LexiconOverviewContainer>
              {definitionView}
            </LexiconOverviewContainer>
          </LexiconCardContainer>
        </GeneralDictionarySection>
      </LexiconCardExternalContainer>
    );
  }
  return null;
}

LexiconCard.defaultProps = {
  searchTerm: '',
  definition: null,
};

export default LexiconCard;
