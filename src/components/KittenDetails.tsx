import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const CatProp = styled.span`
  width: 50px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
  padding: 0;
`;

const KittenDetails = (props: any) => {
  let detail = props.detail;
  const [isEditing, setIsEditing] = useState({ editing: false });

  return <CatProp>{detail}</CatProp>;
};

export default KittenDetails;
