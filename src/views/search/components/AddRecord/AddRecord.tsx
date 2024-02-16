import React, { useContext, useState } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { AddRecordForm } from '@/views/search/components/AddRecord/AddRecordForm/AddRecordForm';
import { AddRecordProps, ArcAddPackage } from '@/views/search/types/searchTypes';
import { ArcEditPackage } from '@/views/search/arcadia/types/arcadiaTypes';
import { AddRecordConfirm } from '@/views/search/components/AddRecord/AddRecordForm/AddRecordConfirm';
import { SearchAddRecordContainer } from '@/views/search/styles/searchStyles';
import { ArcAddContainer, ArcChangeStatusContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import { useClickOutside } from '@/hooks/useClickOutside';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import { SearchActionsEnum } from '@/context/types/enums';
import { ArcadiaTagsWithCounts } from '@/dataSource/types/apiTypes';
import camelcaseKeys from 'camelcase-keys';
import { SearchContext } from '@/context/searchContext';

export function AddRecord(props: AddRecordProps) {
  const { isAddRecordViewable, cancelAddRecordFormView } = props;
  const { state, dispatch } = useContext(SearchContext);
  const [confirmAdd, setConfirmAdd] = useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [addItemPackage, setAddItemPackage] = useState<ArcAddPackage>(null);
  const [isFormActive, setIsFormActive] = useState<boolean>(true);
  const queryClient: QueryClient = useQueryClient();

  const { ref } = useClickOutside(() => {
    setConfirmMessage('');
  });

  const addItem = (itemPackage: ArcEditPackage) => {
    setIsSuccess(false);
    setAddItemPackage(itemPackage);
    setIsFormActive(false);
    setConfirmAdd(true);
  };

  const resetFormAfterConfirm = (message: string, success: boolean) => {
    setConfirmMessage(message);
    setIsSuccess(success);
    setAddItemPackage(null);
    setConfirmAdd(false);
    setIsFormActive(true);

    queryClient.invalidateQueries('arcadiaWordSearch');
    queryClient.invalidateQueries(arcadiaApiEndpoints.summary);
    queryClient.invalidateQueries(arcadiaApiEndpoints.tagsWithCounts).then(() => {
      const arcadiaSubjectsWithCountsData: ArcadiaTagsWithCounts = queryClient.getQueryData(
        arcadiaApiEndpoints.tagsWithCounts,
      );

      const camelCasedData: ArcadiaTagsWithCounts = camelcaseKeys<ArcadiaTagsWithCounts>(
        arcadiaSubjectsWithCountsData,
        { deep: true },
      );

      dispatch({ type: SearchActionsEnum.LOAD_TAGS, value: camelCasedData.subjectsCounts });
    });
  };

  let body: JSX.Element;
  if (isAddRecordViewable) {
    let addRecordCall: JSX.Element = null;
    if (confirmAdd) {
      addRecordCall = (
        <AddRecordConfirm
          itemAddPackage={addItemPackage}
          onConfirmation={resetFormAfterConfirm}
        />
      );
    } else if (confirmMessage) {
      addRecordCall = (
        <ArcChangeStatusContainer>
          {confirmMessage}
        </ArcChangeStatusContainer>
      );
    }

    body = (
      <SearchAddRecordContainer>
        <ArcAddContainer>
          <AddRecordForm
            _ref={ref}
            cancelAddForm={cancelAddRecordFormView}
            onAddItem={addItem}
            isFormActive={isFormActive}
            isSuccess={isSuccess}
          />
          {addRecordCall}
        </ArcAddContainer>
      </SearchAddRecordContainer>
    );
  } else {
    body = null;
  }

  return (body);
}
