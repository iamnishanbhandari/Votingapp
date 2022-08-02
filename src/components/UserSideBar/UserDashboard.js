import React from "react";
import { Routes, Route } from "react-router-dom";
import Information from "../UserPages/Information/Information";
import UserSideBar from "./UserSideBar";
import Result from "../UserPages/Result/Result";
import VoterRegistration from "../UserPages/VoterRegistration/VoterRegistration";
import VotingArea from "../UserPages/VotingArea/VotingArea";
import LogOut from "../UserPages/UserLogOut/UserLogOut";
const UserDashboard = () => {
  return (
    <>
      <UserSideBar />
      <Routes>
        <Route path="/Information" element={<Information />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/VoterRegistration" element={<VoterRegistration />} />
        <Route path="/VotingArea" element={<VotingArea />} />
        <Route path="/LogOut" element={<LogOut />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
