import React, { createRef } from "react";
import useCandidatesData from "../../../hooks/useCandidatesData";
import "./AddCandidate.css";

const nameRef = createRef();
const partyRef = createRef();
const ageRef = createRef();
const qualRef = createRef();
const formRef = createRef();

const AddCandidate = () => {
  const { addCandidate } = useCandidatesData();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCandidate(
      nameRef.current.value,
      partyRef.current.value,
      ageRef.current.value,
      qualRef.current.value
    );
    formRef.current.reset();
  };

  return (
    <>
      <div className="container">
        <div className="mainBox">
          <div className="headBox">
            <p>AddCandidateInfo</p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="inputAddBox">
            <div className="AddlabelInput">
              <label>Name:</label> <br />
              <input
                required
                type="text"
                placeholder="Name"
                ref={nameRef}
                name="name"
              ></input>
            </div>
            <div className="AddlabelInput">
              <label>Party :</label> <br />
              <input
                type="text"
                placeholder="Party"
                ref={partyRef}
                name="party"
              ></input>
            </div>
            <div className="AddlabelInput">
              <label>Age :</label> <br />
              <input
                type="text"
                placeholder="Age"
                ref={ageRef}
                name="age"
              ></input>
            </div>
            <div className="AddlabelInput">
              <label>Qualification :</label> <br />
              <input
                type="text"
                ref={qualRef}
                placeholder="Qualification"
                name="qualification"
              ></input>
            </div>
            <div className="Addbtn">
              <button action="submit"> Add </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;
