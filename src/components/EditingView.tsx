import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  display: block;
  text-align: center;
  margin: 10px auto;
  text-align: center;
`;

const Input = styled.input``;

const EditingView = (props: any) => {
  const [value, setValue] = useState(props.value);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    props.doneEditing(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
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
