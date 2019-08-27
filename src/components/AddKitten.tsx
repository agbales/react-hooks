import React from 'react';
import styled from 'styled-components';

const AddKittenForm = styled.form`
  margin: 50px;
`;

const CatInput = styled.input`
  margin: 5px;
  padding: 5px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
`;

const AddKitten = (props: any) => {
  return (
    <AddKittenForm id="addKitten" onSubmit={e => props.addKitten(e)}>
      <CatInput name="name" placeholder="name"></CatInput>
      <CatInput name="age" placeholder="age"></CatInput>
      <CatInput name="toy" placeholder="toy"></CatInput>
      <Button>+ Cat</Button>
    </AddKittenForm>
  );
};

export default AddKitten;
