import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px;
`;

const AddKittenForm = styled.form`
  margin: 10px;
  text-align: left;
  width: 550px;
  margin: 20px auto;
`;

const CatInput = styled.input`
  margin: 5px;
  padding: 5px;
  max-width: 120px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
  font-size: 1.2rem;
`;

const AddKitten = (props: any) => {
  return (
    <Container>
      <AddKittenForm id="addKitten" onSubmit={e => props.addKitten(e)}>
        <CatInput name="name" placeholder="name" required></CatInput>
        <CatInput name="age" placeholder="age" required></CatInput>
        <CatInput name="toy" placeholder="toy" required></CatInput>
        <Button>+ Kitten</Button>
      </AddKittenForm>
    </Container>
  );
};

export default AddKitten;
