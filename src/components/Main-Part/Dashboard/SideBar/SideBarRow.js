import React from "react";
import "./SideBarRow.css";
import DetailsIcon from "@mui/icons-material/Details";
import { NavLink, useNavigate } from "react-router-dom";

const SideBarRow = ({selected, Icon, title,to }) => {
  return (
    <NavLink to = {to }> 
    
    
    <div className="Main-Box"> 
      <div className="container">
        <div className={`Item ${selected && "selected"}`}>
          <Icon className="itemIcon" />
          <label>{title}</label>
        </div>
      </div>
      </div>
    
    </NavLink>
  );
};

export default SideBarRow;
