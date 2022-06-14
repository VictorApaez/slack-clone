import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/counter/appSlice';

function SidebarOption({ Icon, title, createOption, id }) {
  const dispatch = useDispatch();

  const createRoom = () => {
    const channelName = prompt('Please enter room name.');
    addDoc(collection(db, 'channels'), {
      name: channelName,
    });
  };

  const selectRoom = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <Container onClick={createOption ? createRoom : selectRoom}>
      {Icon && <Icon />}
      {Icon ? (
        <OptionTitle>{title}</OptionTitle>
      ) : (
        <>
          <h3>#</h3>
          <OptionTitle>{title}</OptionTitle>
        </>
      )}
    </Container>
  );
}

export default SidebarOption;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  > h3 {
    margin-left: 20px;
  }

  &:hover {
    background-color: purple;
    opacity: 0.9;
    cursor: pointer;
  }
`;

const OptionTitle = styled.h3`
  font-size: 13px;
  margin-left: 10px;
`;
