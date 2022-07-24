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
  <SideBarRow  Icon={DetailsIcon}  title="CandidatesDetails" to="/Dashboard/CandidatesDetails"  />
  <SideBarRow selected Icon={PersonAddIcon} title="Add Candidate"  to="/Dashboard/AddCandidate" />
  <SideBarRow Icon={HowToRegIcon} title="Register"  to="/Dashboard/Register" />
  <SideBarRow Icon={PublishedWithChangesIcon} title="ChangeStatus"  to="/Dashboard/ChangeStatus"  />
  <SideBarRow Icon={LogoutIcon} title="Logout"  to="/Dashboard/Logout" />


</div>

</>
    )
}

export default Sidebar