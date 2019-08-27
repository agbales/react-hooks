import React from 'react';
import styled from 'styled-components';

const AddCatForm = styled.form`
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

const AddCat = (props: any) => {
  return (
    <AddCatForm id="addKitten" onSubmit={e => props.addCat(e)}>
      <CatInput name="name" placeholder="name"></CatInput>
      <CatInput name="age" placeholder="age"></CatInput>
      <CatInput name="toy" placeholder="toy"></CatInput>
      <Button>+ Cat</Button>
    </AddCatForm>
  );
};

export default AddCat;
