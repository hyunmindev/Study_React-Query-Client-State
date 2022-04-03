import useClientValue from '../../hooks/useClientValue';

function Profile() {
  const username = useClientValue('username', '');

  return <h1 style={{ backgroundColor: 'red', height: 64 }}>{username}</h1>;
}

export default Profile;
