import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditingView from './EditingView';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
  display: block;
  text-align: center;
  margin: 10px auto;
  text-align: center;
`;

const CatProp = styled.span`
  width: 100px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
  padding: 0;
  display: inline-block;
`;

const ValueContainer = styled.span`
  display: block;
  text-align: center;
  margin: 0 auto;
  color: black;
`;

const KittenDetails = (props: any) => {
  let detail = props.detail;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(detail);

  const doneEditing = (updatedValue: string): void => {
    setValue(updatedValue);
    toggleDetailEdit();
  };

  const toggleDetailEdit = (): void => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const DetailView = (): JSX.Element => {
    return (
      <div>
        <ValueContainer>{value}</ValueContainer>
        <Button onClick={() => toggleDetailEdit()}>Edit</Button>
      </div>
    );
  };

  const KittenDisplay = (): JSX.Element => {
    if (isEditing) {
      return <EditingView value={value} doneEditing={doneEditing} />;
    } else {
      return <DetailView />;
    }
  };

  return (
    <CatProp>
      <KittenDisplay />
    </CatProp>
  );
};

export default KittenDetails;
