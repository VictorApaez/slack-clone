import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SidebarOption from './SidebarOption';

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

        <SidebarOption Icon={InsertCommentIcon} title='Threads'></SidebarOption>
        <SidebarOption
          Icon={InboxIcon}
          title='Mesntions & Reactions'
        ></SidebarOption>
        <SidebarOption Icon={DraftsIcon} title='Saved items'></SidebarOption>
        <SidebarOption
          Icon={BookmarkBorderIcon}
          title='Channel Browser'
        ></SidebarOption>
        <SidebarOption
          Icon={InsertCommentIcon}
          title='this is the title'
        ></SidebarOption>
        <SidebarOption
          Icon={PeopleAltIcon}
          title='People & user groups'
        ></SidebarOption>
        <SidebarOption Icon={AppsIcon} title='Apps'></SidebarOption>
        <SidebarOption Icon={FileCopyIcon} title='File browser'></SidebarOption>
        <SidebarOption Icon={ExpandLessIcon} title='Show less'></SidebarOption>
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
    font-size: 13px;
    font-weight: 400;
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