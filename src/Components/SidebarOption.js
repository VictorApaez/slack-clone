import React from 'react';
import styled from 'styled-components';

function SidebarOption({ Icon, title }) {
  return (
    <Container>
      {Icon && <Icon />}
      <OptionTitle>{title}</OptionTitle>
    </Container>
  );
}

export default SidebarOption;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;

  &:hover {
    background-color: red;
  }
`;

const OptionTitle = styled.h3`
  font-size: 13px;
  margin-left: 10px;
`;
