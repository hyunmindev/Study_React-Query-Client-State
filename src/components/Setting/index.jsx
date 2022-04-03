import { useState } from 'react';

import useSetClientState from '../../hooks/useSetClientState';

function Header() {
  const [username, setUsername] = useState('');
  const setClientState = useSetClientState('username');

  const handleClick = () => setClientState(username);

  return (
    <div style={{ backgroundColor: 'blue', height: 64 }}>
      <input
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <button
        type='button'
        onClick={handleClick}
      >
        update
      </button>
    </div>
  );
}

export default Header;
