import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
  return (
    <Container>
      <Left>
        <AvatarIcon></AvatarIcon>
        <AccessTimeIcon />
      </Left>
    </Container>
  );
}

export default Header;

const Container = styled.div``;
const Left = styled.div``;
const AvatarIcon = styled(Avatar)``;
