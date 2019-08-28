import * as React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const List = styled.div`
  margin: 50px;
`;

const KittenList = (props: any) => {
  return (
    <List>
      {props.state.kittens.map((kitten: any, index: number) => (
        <Profile key={index} kitten={kitten} index={index} />
      ))}
    </List>
  );
};

export default KittenList;
