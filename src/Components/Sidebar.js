import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderInfo>
            <h2>SLACK CLONE HQ</h2>
            <h3>
              <FiberManualRecordIcon />
              Victor Apaez
            </h3>
          </HeaderInfo>
          <PencilIcon />
        </HeaderContainer>
      </Container>
    </>
  );
}

export default Sidebar;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  max-width: 260px;
  margin-top: 60px;
  flex: 0.3;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid gray;
`;
const HeaderInfo = styled.div`
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
  }
`;
const PencilIcon = styled(CreateIcon)`
  color: black;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
`;
