import React from "react";
import "./SideBarRow.css";
import DetailsIcon from "@mui/icons-material/Details";
import { NavLink, useNavigate } from "react-router-dom";

const SideBarRow = ({ selected, Icon, title, to }) => {
  return (
    <NavLink
      to={to}
    >
{ ({isActive})=>
     ( <div className="Main-Box">
        <div className="container">
          <div className={`Item ${isActive && "selected"}`}>
            <Icon className="itemIcon" />
            <label>{title}</label>
          </div>
        </div>
      </div>
   )
}
    </NavLink>
  );
};

export default SideBarRow;



// import React from "react";
// import "./SideBarRow.css";
// import DetailsIcon from "@mui/icons-material/Details";
// import { NavLink, useNavigate } from "react-router-dom";

// const SideBarRow = ({ selected, Icon, title, to }) => {
//   return (
//     <NavLink
//       to={to}
//       style={({ isActive }) =>
//         isActive
//           ? {
//               color: "#fff",
//               background: "#7600dc",
//             }
//           : { color: "#545e6f", background: "#f0f0f0" }
//       }
//     >
//       <div className="Main-Box">
//         <div className="container">
//           <div className={`Item ${selected && "selected"}`}>
//             <Icon className="itemIcon" />
//             <label>{title}</label>
//           </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default SideBarRow;

