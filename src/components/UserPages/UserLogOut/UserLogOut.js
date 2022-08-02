import React from "react";
import "./UserLogOut.css";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  let user = JSON.parse(localStorage.getItem("useryoutube"));
  const navigate = useNavigate();

  const clicked = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
    <>
      <div className="usersContainer">
        <div className="usersLogoutBox">
          <p>Do you want to logout ?</p>

          <div className="userLogoutBtn">
            <button onClick={clicked}> Logout </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogout;
