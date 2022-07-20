import React from "react";
import "./SideBarRow.css";
import DetailsIcon from "@mui/icons-material/Details";
const SideBarRow = ({selected, Icon, title }) => {
  return (
    <>
    <div className="Main-Box"> 
      <div className="container">
        <div className={`Item ${selected && "selected"}`}>
          <Icon className="itemIcon" />
          <label>{title}</label>
        </div>
      </div>
      </div>
    </>
  );
};

export default SideBarRow;
