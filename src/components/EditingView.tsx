import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  text-align: left;
  margin: 0 auto;
  color: black;
  width: 50px;
  display: inline;
`;

const Input = styled.input`
  width: 70px;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
`;

const EditingView = (props: any) => {
  const { kittenDetails, setKittenDetails, index } = props;

  const updateKittenState = (
    e: any,
    attribute: string,
    updatedValue: string
  ): void => {
    e.preventDefault();
    const updatedKitten = { ...kittenDetails, [attribute]: updatedValue };
    setKittenDetails(updatedKitten);
  };

  // const handleSubmit = (e: any): Kitten => {
  //   e.prventDefault();
  //   return setKittenDetails(kittenState);
  // };

  return (
    //onSubmit={handleSubmit}
    <Form key={`form-${index}`}>
      <Input
        key={`name-${index}`}
        type="text"
        value={kittenDetails.name}
        onChange={e => updateKittenState(e, 'name', e.target.value)}
      />
      <Input
        key={`age-${index}`}
        type="text"
        value={kittenDetails.age}
        onChange={e => updateKittenState(e, 'age', e.target.value)}
      />
      <Input
        key={`toy-${index}`}
        type="text"
        value={kittenDetails.toy}
        onChange={e => updateKittenState(e, 'toy', e.target.value)}
      />
    </Form>
  );
};

export default EditingView;
