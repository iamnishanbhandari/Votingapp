import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        if(list.length >=4){
          return(
            alert("Cannot add more")
          )
        }
    setList((oldItems) => {
            return [...oldItems, input];
    });
  };

  return (
    <>
      <div className="registerContainer">
        <div className="registerMainBox">
          <div className="registerHeadBox">
            <p>Register</p>
          </div>

          <div className="registerInputBox">
            <div className="registerInfo">
              <p>
                S.N <span className="span1"> Account address </span>
                <span className="span2"> registered!!</span>
              </p>
            </div>
            <div className="registeredList">
              {list.map((itemval) => {
                return <ol>  <li>{itemval}</li></ol>;
              })}
            </div>

            <div className="labelInput">
              <input
                type="text"
                placeholder="Enter voter info here!!"
                onChange={handleChange}
              ></input>
            </div>
            <div className="registerBtn">
          <button onClick={handleSubmit}> Register </button>
        </div>     
          </div>
        </div>
       
      </div>
    </>
  );
};
export default Register;
