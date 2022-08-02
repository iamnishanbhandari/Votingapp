import React from "react";
import AddCandidate from "../../pages/AddCandidate/AddCandidate";
import ChangeStatus from "../../pages/ChangeStatus/ChangeStatus";
import Register from "../../pages/Register/Register";
import Sidebar from "./SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Logout from "../../pages/Logout/Logout";
import { Button } from "@mui/joy";
import CandidatesDetails from "../../pages/CandidateDetails/CandidatesDetails";
const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Button>button</Button>
      <Routes>
        <Route path="/CandidatesDetails" element={<CandidatesDetails />} />
        <Route path="/AddCandidate" element={<AddCandidate />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ChangeStatus" element={<ChangeStatus />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default Dashboard;
