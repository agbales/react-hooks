import * as React from 'react';
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

const CatProp = styled.span`
  width: 100px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
  padding: 0;
  display: inline-block;
`;

const KittenDetails = (props: any) => {
  let detail = props.detail;
  const [isEditing, setIsEditing] = useState(false);

  const toggleDetailEdit = (): void => {
    console.log('hit');
    if (isEditing) {
      setIsEditing(false);
      console.log('editing false');
    } else {
      setIsEditing(true);
      console.log('editing true');
    }
  };

  const KittenDisplay = (): JSX.Element => {
    if (isEditing) {
      return (
        <div>
          <input value={detail} />
          <Button onClick={() => toggleDetailEdit()}>Done</Button>
        </div>
      );
    } else {
      return (
        <div>
          <span>{detail}</span>
          <Button onClick={() => toggleDetailEdit()}>Edit</Button>
        </div>
      );
    }
  };

  return (
    <CatProp>
      <KittenDisplay />
    </CatProp>
  );
};

export default KittenDetails;
