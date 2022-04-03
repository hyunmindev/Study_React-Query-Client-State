import { useQuery } from 'react-query';

const useClientValue = (key, placeholderData) =>
  useQuery(key, () => placeholderData, {
    placeholderData,
    staleTime: Infinity,
  }).data;

export default useClientValue;
