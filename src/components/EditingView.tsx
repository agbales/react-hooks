import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
`;

const EditingView = (props: any) => {
  const [value, setValue] = useState(props.value);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log('returning: ', value);
    return value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <Button type="submit" value="Submit">
        Update
      </Button>
    </form>
  );
};

export default EditingView;
