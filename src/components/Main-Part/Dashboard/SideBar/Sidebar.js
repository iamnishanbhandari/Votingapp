import React from 'react'
import SideBarRow from './SideBarRow'
import DetailsIcon from '@mui/icons-material/Details';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Sidebar.css";

const Sidebar = () => {
  return (
<>
<div className='Sidebar'>
  <SideBarRow selected Icon={DetailsIcon} title="Candidate Details" />
  <SideBarRow Icon={PersonAddIcon} title="Add Candidate" />
  <SideBarRow Icon={HowToRegIcon} title="Register" />
  <SideBarRow Icon={PublishedWithChangesIcon} title="Change Status" />
  <SideBarRow Icon={LogoutIcon} title="Logout" />


</div>

</>
    )
}

export default Sidebar