// import React, { useState } from "react";
// import "./Login.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
// import { NavLink, useNavigate } from "react-router-dom";
// import { color } from "@mui/system";
// import { findByLabelText } from "@testing-library/react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import Input from "../input/Input";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const history = useNavigate();
//   const [inpVal, setInpVal] = useState({
//     email: "",
//     password: "",
//   });

//   // const [data, setData] = useState([]);

//   const getData = (e) => {
//     const { value, name } = e.target;

//     setInpVal(() => {
//       return {
//         ...inpVal,
//         [name]: value,
//       };
//     });
//   };

//   const addData = (e) => {
//     e.preventDefault();

//     const getuserArr = localStorage.getItem("useryoutube");
//     console.log(getuserArr);

//     const { email, password } = inpVal;

//     if (email === "") {
//       alert("Please fill email");
//     } else if (!email.includes("@")) {
//       alert("Please Type valid email");
//     } else if (password === "") {
//       alert("Please fill password");
//     } else if (password.length < 5) {
//       alert("password length greater than 5 ");
//     } else {
//       if (getuserArr && getuserArr.length) {
//         const userdata = JSON.parse(getuserArr);
//         const userlogin = userdata.filter((el, k) => {
//           return el.email === email && el.password === password;
//         });
//         if (userlogin.length === 0) {
//           alert("invalid details");
//         } else {
//           console.log("user login successful");
//           history("/Dashboard/AddCandidate");
//         }
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           padding: "30px 20px",
//           boxShadow: "0 0 15px -5px #bbb",
//           border: "1px solid #ddd",
//           maxWidth: "fit-content",
//           borderRadius: 16,
//         }}
//       >
//         <h2 style={{ marginBottom: 30 }}> Log-in form</h2>
//         <div className="Main-box">
//           <Input
//             required
//             width="350px"
//             startIcon={<LockIcon color="action" />}
//             type={"text"}
//             placeholder={"Email"}
//             onChange={getData}
//             name={"email"}
//             restStyles={{
//               marginBottom: 20,
//             }}
//           />
//           <Input
//             required
//             width="350px"
//             startIcon={<LockIcon color="action" />}
//             type={showPassword ? "text" : "password"}
//             placeholder={"Password"}
//             onChange={getData}
//             name={"password"}
//             endIcon={
//               <span
//                 style={{ marginLeft: -60 }}
//                 onClick={() => setShowPassword((currState) => !currState)}
//               >
//                 {showPassword ? <Visibility /> : <VisibilityOff />}
//               </span>
//             }
//           />
//           <div className="background"></div>
//           <div className="ifSignup">
//             <p>No Account Create from here!!!</p>
//             <button>
//               <NavLink
//                 to="/Register"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 Sign-up
//               </NavLink>
//             </button>
//           </div>
//           <button className="Login-Button" onClick={addData}>
//             Log-in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;

import React, { useState } from "react";
import "./Login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { NavLink, useNavigate } from "react-router-dom";
import { color } from "@mui/system";

const Login = () => {
  const history = useNavigate();
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpVal;

    if (email === "") {
      alert("Please fill email");
    } else if (!email.includes("@")) {
      alert("Please Type valid email");
    } else if (password === "") {
      alert("Please fill password");
    } else if (password.length < 5) {
      alert("password length greater than 5 ");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login successful");
          history("/Dashboard/AddCandidate");
        }
      }
    }
  };

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
            <input
              type={"text"}
              placeholder={"Email"}
              onChange={getData}
              name={"email"}
            ></input>
          </div>
          <div className="Password">
            <i>
              <LockIcon color="action" />
            </i>
            <input
              type={"text"}
              placeholder={"Password"}
              onChange={getData}
              name={"password"}
            ></input>
          </div>
          <div className="background"></div>
          <div className="ifSignup">
            <p>No Account Create from here!!!</p>
            <button>
              <NavLink
                to="/Register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign-up
              </NavLink>
            </button>
          </div>
          <button className="Login-Button" onClick={addData}>
            Log-in
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
