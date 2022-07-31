import React, { useState } from "react";
import "./Register.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useNavigate("");
  const [data, setData] = useState([]);
  console.log(inpVal);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpVal;

    if (name === "") {
      alert("Plz fill Name");
    } else if (email === "") {
      alert("Please fill email");
    } else if (!email.includes("@")) {
      alert("Please Type valid email");
    } else if (password === "") {
      alert("Please fill password");
    } else if (password.length < 5) {
      alert("password length greater than 5 ");
    } else {
      console.log("Data added successfully");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpVal]));
      history("/Complete");
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h2> Sign-up form</h2>
        </div>
        <div className="Main-box">
          <div className="name-Profile">
            <i>
              <AccountCircleIcon color="action" />
            </i>
            <input
              required
              type={"text"}
              placeholder={"Name"}
              onChange={getData}
              name="name"
            ></input>
          </div>
          <div className="Email">
            <i>
              <MailIcon color="action" />
            </i>
            <input
              required
              type={"text"}
              placeholder={"Email"}
              onChange={getData}
              name="email"
            ></input>
          </div>
          <div className="Password">
            <i>
              <LockIcon color="action" />
            </i>
            <input
              required
              type={"password"}
              placeholder={"Password"}
              onChange={getData}
              name="password"
            ></input>
          </div>

          <div className="background"></div>
          <div className="ifLogin">
            <p>Have Account login here!!!</p>
            <button>
              <NavLink
                to={"/Login"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Log-in
              </NavLink>
            </button>
          </div>
          <button className="Signup-Button" onClick={addData}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
export default Register;
