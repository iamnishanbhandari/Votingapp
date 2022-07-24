import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="mainBox">
          <div className="headBox">
            <p>Register</p>
          </div>

          <div className="inputBox">
            <div className="registerInfo">
              <p>
                S.N <span className="span1"> Account address </span> <span className="span2"> registered!!</span>
              </p>
            </div>

            <div className="labelInput">
              <input type="text" placeholder="Enter voter info here!!"></input>
            </div>
          </div>
        </div>
        <div className="btn">
          <button> Register </button>
        </div>
      </div>
    </>
  );
};

export default Register;
