import { useQueryClient } from 'react-query';

const useSetClientState = (key) => {
  const queryClient = useQueryClient();
  return (state) => queryClient.setQueryData(key, state);
};

export default useSetClientState;
