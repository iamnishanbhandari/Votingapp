import React from "react";
import "./Adminlogin.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
const Adminlogin = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2> Log-in form</h2>
        </div>
        <div className="Main-box">
          <div className="Email">
            <i>
              <MailIcon color="action" />
            </i>
            <input type={"text"} placeholder={"Email"}></input>
          </div>
          <div className="Password">
            <i>
              <LockIcon color="action" />
            </i>
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
