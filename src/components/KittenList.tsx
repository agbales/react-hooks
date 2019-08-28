import * as React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const List = styled.div`
  margin: 50px;
`;

const KittenList = (props: any) => {
  const removeKitten = props.removeKitten;

  return (
    <List>
      {props.state.kittens.map((kitten: any, index: number) => (
        <Profile
          key={index}
          kitten={kitten}
          index={index}
          removeKitten={removeKitten}
        />
      ))}
    </List>
  );
};

export default KittenList;
