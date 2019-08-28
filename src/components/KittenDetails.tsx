import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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
  const [isEditing, setIsEditing] = useState({ isEditing: false });

  const KittenDisplay = (): JSX.Element => {
    if (!isEditing) {
      return <input value={detail} />;
    } else {
      return <div>{detail}</div>;
    }
  };

  return (
    <CatProp>
      <KittenDisplay />
    </CatProp>
  );
};

export default KittenDetails;
