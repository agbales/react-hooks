import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import KittenDetails from './KittenDetails';
import EditingView from './EditingView';

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
  const [kittenDetails, setKittenDetails] = useState(kitten);

  const toggleDetailEdit = (): void => {
    setIsEditing(!isEditing);
  };

  const editButtonText = isEditing ? 'Done' : 'Edit';

  const updateKittenDetails = (updatedState: any): void => {
    console.log('UPDATE', updatedState);
    setKittenDetails(updatedState);
  };

  const Display = (): JSX.Element => {
    if (isEditing) {
      return (
        <EditingView
          kittenDetails={kittenDetails}
          setKittenDetails={updateKittenDetails}
          index={index}
        />
      );
    } else {
      return <KittenDetails kitten={kittenDetails} />;
    }
  };

  return (
    <Box>
      <ProfilePic src={kittenDetails.image} alt="profile pic" />
      <Display />
      <Button onClick={() => toggleDetailEdit()}>{editButtonText}</Button>
      <Button onClick={e => removeKitten(e, index)}>X</Button>
    </Box>
  );
};

export default Profile;
