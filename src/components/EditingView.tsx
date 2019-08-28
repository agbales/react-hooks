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

const Input = styled.input`
  width: 70px;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
`;

const EditingView = (props: any) => {
  const { index, value, setValue } = props;

  return (
    <Input
      key={index}
      type="text"
      name="edit-view"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default EditingView;
