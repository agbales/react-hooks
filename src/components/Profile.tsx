import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import KittenDetails from './KittenDetails';

const Box = styled.div`
  height: 100px;
  margin: 10px;
  text-align: left;
  width: 600px;
  margin: 20px auto;
  padding: 40px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  margin-left: 5px;
`;

const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
`;

const Profile = (props: any): JSX.Element => {
  const { kitten, index, removeKitten } = props;
  const [isEditing, setIsEditing] = useState(false);

  const toggleDetailEdit = (): void => {
    setIsEditing(!isEditing);
  };

  const editButtonText = isEditing ? 'Done' : 'Edit';

  return (
    <Box key={index}>
      <ProfilePic src={kitten.image} alt="profile pic" />
      <KittenDetails detail={kitten.name} editing={isEditing} index={index} />
      <KittenDetails detail={kitten.age} editing={isEditing} index={index} />
      <KittenDetails detail={kitten.toy} editing={isEditing} index={index} />
      <Button onClick={() => toggleDetailEdit()}>{editButtonText}</Button>
      <Button onClick={e => removeKitten(e, index)}>X</Button>
    </Box>
  );
};

export default Profile;
