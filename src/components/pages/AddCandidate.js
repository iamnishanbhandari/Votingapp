import React from "react";
import "./AddCandidate.css";

const AddCandidate = () => {
  return (
    <>
      <div className="container">
        <div className="mainBox">
          <div className="headBox">
            <p>AddCandidateInfo</p>
          </div>
          <div className="inputAddBox">
            <div className="AddlabelInput">
              <label>Name:</label> <br />
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="AddlabelInput">
              <label>Party :</label> <br />
              <input type="text" placeholder="Party"></input>
            </div>
            <div className="AddlabelInput">
              <label>Age :</label> <br />
              <input type="text" placeholder="Age"></input>
            </div>
            <div className="AddlabelInput">
              <label>Qualification :</label> <br />
              <input type="text" placeholder="Qualification"></input>
            </div>
          </div>
          <div className="Addbtn"> 
          <button> Add </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;
