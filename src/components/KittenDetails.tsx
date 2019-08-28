import * as React from 'react';
import { useState, useEffect } from 'react';
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
  const [value, setValue] = useState(detail);

  const toggleDetailEdit = (): void => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const EditingView = (): JSX.Element => {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button onClick={() => toggleDetailEdit()}>Done</Button>
      </div>
    );
  };

  const DetailView = (): JSX.Element => {
    return (
      <div>
        <span>{detail}</span>
        <Button onClick={() => toggleDetailEdit()}>Edit</Button>
      </div>
    );
  };

  const KittenDisplay = (): JSX.Element => {
    if (isEditing) {
      return <EditingView />;
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
