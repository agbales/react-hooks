import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import EditingView from './EditingView';

const CatProp = styled.span`
  width: 100px;
  color: palevioletred;
  margin: 0 1em;
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
  let { detail, editing, index } = props;
  const [value, setValue] = useState(detail);

  const Display = (): JSX.Element => {
    if (editing) {
      return (
        <EditingView
          key={index}
          value={value}
          setValue={setValue}
          index={index}
        />
      );
    } else {
      return <ValueContainer>{value}</ValueContainer>;
    }
  };

  return (
    <CatProp key={index}>
      <Display />
    </CatProp>
  );
};

export default KittenDetails;
