import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const DetailsBox = styled.span`
  margin: 25px;
`;

const ValueContainer = styled.span`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  color: black;
  width: 50px;
  margin-right: 50px;
`;

const KittenDetails = (props: any) => {
  let { kitten } = props;

  return (
    <DetailsBox>
      <ValueContainer>{kitten.name}</ValueContainer>
      <ValueContainer>{kitten.age}</ValueContainer>
      <ValueContainer>{kitten.toy}</ValueContainer>
    </DetailsBox>
  );
};

export default KittenDetails;
