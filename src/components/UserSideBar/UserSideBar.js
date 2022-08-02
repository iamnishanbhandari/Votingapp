import React from "react";
import UserSideBarRow from "../UserSideBarRow/UserSideBarRow";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PollIcon from "@mui/icons-material/Poll";
import "./UserSideBar.css";

const UserSideBar = () => {
  return (
    <div className="UserSideBar">
      <UserSideBarRow
        Icon={ImportContactsIcon}
        title="Information"
        to="/UserDashboard/Information"
      />

      <UserSideBarRow
        Icon={PollIcon}
        title="Result"
        to="/UserDashboard/Result"
      />
      <UserSideBarRow
        Icon={AppRegistrationIcon}
        title="VoterRegistration"
        to="/UserDashboard/VoterRegistration"
      />
      <UserSideBarRow
        Icon={HowToVoteIcon}
        title="VotingArea"
        to="/UserDashboard/VotingArea"
      />

      <UserSideBarRow
        Icon={LogoutIcon}
        title="Logout"
        to="/UserDashboard/Logout"
      />
    </div>
  );
};

export default UserSideBar;
