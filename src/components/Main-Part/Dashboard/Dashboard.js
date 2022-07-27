import React from "react";
import AddCandidate from "../../pages/AddCandidate";
import ChangeStatus from "../../pages/ChangeStatus";
import Register from "../../pages/Register";
import Sidebar from "./SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import CandidatesDetails from "../../pages/CandidatesDetails";
import Logout from "../../pages/Logout"
const Dashboard = () => {
  return (

    <>
      <Sidebar />
      <Routes>
        <Route path="/CandidatesDetails" element={<CandidatesDetails/>} />
        <Route path="/AddCandidate" element={<AddCandidate />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ChangeStatus" element={<ChangeStatus />} />
        <Route path="/Logout" element={<Logout/>}/>
      </Routes>
    </>
  );
};

export default Dashboard;
