import React from "react";
import Firstpage from "./components/firstpage/Firstpage";
import Adminlogin from "./components/Admin-login/Adminlogin";
import Register from "./components/Signup/Register";
import Login from "./components/Log-in/Login";
import Dashboard from "./components/Main-Part/Dashboard/Dashboard";
import Complete from "./components/Signup/Complete";
import UserDashboard from "./components/UserSideBar/UserDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Information from "./components/UserPages/Information/Information";

const App = () => {
  return (
    <>
      <Router>
        {/* <Firstpage/> */}
        <Routes>
          <Route path="/" element={<Firstpage />}></Route>
          <Route path="/Adminlogin" element={<Adminlogin />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Complete" element={<Complete />}></Route>
          <Route exact path="/Dashboard/*" element={<Dashboard />}></Route>
          <Route
            exact
            path="/UserDashboard/*"
            element={<UserDashboard />}
          ></Route>
          <Route path="/Information" element={<Information />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
