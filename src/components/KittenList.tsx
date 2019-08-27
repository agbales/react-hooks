import * as React from 'react';
import styled from 'styled-components';
import KittenDetails from './KittenDetails';

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

const List = styled.div`
  margin: 50px;
`;

const KittenList = (props: any) => {
  return (
    <List>
      {props.state.kittens.map((kitten: any, index: number) => (
        <Box key={index}>
          <img src={kitten.image} alt="profile pic" />
          <KittenDetails detail={kitten.name} />
          <KittenDetails detail={kitten.age} />
          <KittenDetails detail={kitten.toy} />
          <Button onClick={e => props.removeKitten(e, index)}>X</Button>
        </Box>
      ))}
    </List>
  );
};

export default KittenList;
