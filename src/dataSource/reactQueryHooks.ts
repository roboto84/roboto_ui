import { useQuery, UseQueryResult } from 'react-query';
import {
  getData,
  getLexiconWordSearch,
  getArcadiaWordSearch, deleteArcadiaRecord,
} from '@/dataSource/restApis/robotoRestApi';
import { QueryHookError } from '@/dataSource/types/hookTypes';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import { ArcDeleteItemResults, ArcSearchResults } from '@/views/search/arcadia/types/arcadiaTypes';

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await getData(queryKey[0]);
  return data;
};

export const reactQueryConfig = {
  defaultOptions: {
    queries: { queryFn: defaultQueryFn },
  },
};

const getLexiconSearch = async (word: string): Promise<any> => {
  const { data } = await getLexiconWordSearch(word);
  return data;
};

export const useLexiconWordSearch = (word: string): UseQueryResult<
  WordDefinition, QueryHookError> => (
  useQuery(['lexiconWordSearch', word], () => getLexiconSearch(word))
);

const getArcadiaSearch = async (word: string): Promise<any> => {
  const { data } = await getArcadiaWordSearch(word);
  return data;
};

const deleteArcadiaItem = async (dataKey: string): Promise<any> => {
  const { data } = await deleteArcadiaRecord(dataKey);
  return data;
};

export const useArcadiaWordSearch = (word: string): UseQueryResult<
  ArcSearchResults, QueryHookError> => (
  useQuery(['arcadiaWordSearch', word], () => getArcadiaSearch(word))
);

export const useArcadiaDeleteItem = (dataKey: string): UseQueryResult<
  ArcDeleteItemResults, QueryHookError> => (
  useQuery(['arcadiaDeleteItem', dataKey], () => deleteArcadiaItem(dataKey))
);
