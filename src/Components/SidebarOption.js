import React from 'react';
import styled from 'styled-components';

function SidebarOption({ Icon, title, createOption }) {
  const createRoom = () => {
    const channelName = prompt('Please enter room name.');
    console.log(channelName);
  };
  return (
    <Container onClick={createOption && createRoom}>
      {Icon && <Icon />}
      {Icon ? (
        <OptionTitle>{title}</OptionTitle>
      ) : (
        <>
          <h2>#</h2>
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
  padding: 15px;

  &:hover {
    background-color: purple;
    opacity: 0.9;
  }
`;

const OptionTitle = styled.h3`
  font-size: 13px;
  margin-left: 10px;
`;
