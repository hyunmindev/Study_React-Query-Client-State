import { useState } from 'react';
import { useQueryClient } from 'react-query';
import PropTypes from 'prop-types';

function Input({ model }) {
  return (
    <input
      value={model[0]}
      onChange={({ target: { value } }) => model[1](value)}
    />
  );
}

Input.propTypes = {
  model: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])).isRequired,
};

const useSetQueryState = (key) => {
  const queryClient = useQueryClient();
  return (state) => queryClient.setQueryData(key, state);
};

function Header() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const setQueryState = useSetQueryState('user');

  const handleClick = () => {
    setQueryState({ name, age });
  };

  return (
    <header>
      <Input model={[name, setName]} />
      <Input model={[age, setAge]} />
      <button
        type='button'
        onClick={handleClick}
      >
        click
      </button>
    </header>
  );
}

export default Header;
