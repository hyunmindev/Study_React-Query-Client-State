import { useQuery } from 'react-query';

const useQueryValue = (key, placeholderData) =>
  useQuery(key, () => placeholderData, {
    placeholderData,
    staleTime: Infinity,
  }).data;

function Profile() {
  const { name, age } = useQueryValue('user', { user: '', age: 0 });

  return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
    </>
  );
}

export default Profile;
