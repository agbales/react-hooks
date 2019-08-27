import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
`;

const Box = styled.div`
  height: 100px;
  margin: 10px;
  text-align: left;
`;

const CatList = styled.div`
  margin: 50px;
`;

const CatProp = styled.span`
  width: 50px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: left;
  padding: 0;
`;

const KittenList = (props: any) => {
  return (
    <CatList>
      {props.state.kittens.map((kitten: any, index: number) => (
        <Box key={index}>
          <img src={kitten.image} alt="profile pic" />
          <CatProp>{kitten.name}</CatProp>
          <CatProp>{kitten.age}</CatProp>
          <CatProp>{kitten.toy}</CatProp>
          <input onChange={e => props.updateCatName(e, index)} />
          <Button onClick={e => props.removeCat(e, index)}>X</Button>
        </Box>
      ))}
    </CatList>
  );
};

export default KittenList;
