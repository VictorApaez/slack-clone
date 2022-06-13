import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <Container>
      <Left>
        <AvatarIcon />
        <ClockIcon />
      </Left>
      <Searchbar>
        <input type='text'></input>
      </Searchbar>
      <Right>
        <HelpIcon />
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  z-index: 999;
  align-items: center;
  background-color: var(--slack-color);
  color: white;
  position: fixed;
  height: 60px;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.3;
`;
const AvatarIcon = styled(Avatar)`
  margin-left: 20px;
`;
const ClockIcon = styled(AccessTimeIcon)``;
const Searchbar = styled.div`
  flex: 0.4;
  padding: 5px;
  > input {
    width: 100%;
    padding: 0;
    color: grey;
    border: 1px solid gray;
    background-color: #421f44;
    text-align: center;
    border-radius: 6px;
    height: 20px;
  }
  > input:focus {
    outline: none;
    border-color: red;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: flex-end;
`;
const HelpIcon = styled(HelpOutlineIcon)`
  margin-right: 20px;
`;
