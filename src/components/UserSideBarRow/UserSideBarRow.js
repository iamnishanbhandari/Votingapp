import React from "react";
import "./UserSideBarRow.css";
// import DetailsIcon from "@mui/icons-material/Details";
import { NavLink } from "react-router-dom";

const UserSideBarRow = ({ Icon, title, to }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div className="UserMain-Box">
          <div className="userContainer">
            <div className={`Item ${isActive && "selected"}`}>
              <Icon className="userItemIcon" />
              <label>{title}</label>
            </div>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default UserSideBarRow;
