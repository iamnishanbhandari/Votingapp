import React from "react";
import "./Firstpage.css";
import { NavLink } from "react-router-dom";
const Firstpage = () => {
  return (
    <>
      <div className="container">
        <div className="background-img">
          <img src="/assets/voteimg.jpg" className="backgroundImage" alt="" />
        </div>
        <div className="box">
          <div>
            <h1>Block-Vote</h1>
            <p>Your Vote Matters!!</p>
          </div>
          <div className="buttons">
            <button className="loginButton">
              <NavLink
                to="/Login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Log-in{" "}
              </NavLink>
            </button>
            <button className="signupButton">
              <NavLink
                to="/Register"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sign-up{" "}
              </NavLink>{" "}
            </button>
            <button className="adminLogin">
              <NavLink
                to="/Adminlogin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Adminlogin{" "}
              </NavLink>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Firstpage;
