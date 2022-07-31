import React from "react";
import "./Adminlogin.css";
// import { LockOutlined, MailOutlined } from "@mui/icons-material";
import Input from "../input/Input";
const Adminlogin = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2> Log-in form</h2>
        </div>
        <div className="Main-box">
          <div className="Email">
            {/* <i>
              <MailOutlined color="action" />
            </i> */}
            <input type={"text"} placeholder={"Email"}></input>
          </div>
          <Input type="text" placeholder="faukat" />
          <div className="Password">
            {/* <i>
              <LockOutlined color="action" /> ////here
            </i> */}
            <input type={"text"} placeholder={"Password"}></input>
          </div>
          <div className="background"></div>
          <div className="ifSignup">
            <p>Welcome Boss!!!</p>
            {/* <button>Sign-up</button> */}
          </div>
          <button className="Login-Button">Log in</button>
        </div>
      </div>
    </>
  );
};
export default Adminlogin;
