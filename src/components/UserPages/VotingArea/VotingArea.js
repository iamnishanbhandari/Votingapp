import React from "react";
import VotingAreaView from "./VotingAreaView";
import useCandidatesData from "../../../hooks/useCandidatesData";

const VotingArea = () => {
  const { userCandidatesData } = userCandidatesData();

  return (
    <div
      className="VotingAreaContainer"
      style={{
        height: "250px",
        width: "300px",
        position: "absolute",
        top: "60px",
        left: "400px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        cursor: "pointer",
      }}
    >
      <div className="Votingprofile"></div>
      <img
        src="https://i.pinimg.com/originals/da/4f/ad/da4fad3f0c9549a86a70dc90d9208e8d.jpg"
        alt="candidatepicture"
        height={100}
        style={{ margin: "10px 0px 0 95px" }}
      ></img>
      <div
        className="VotingAreaBox"
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="VotingAreaDetails"
          style={{
            padding: "10px",
            width: "fit-content",
          }}
        >
          <VotingAreaView userInfo={userCandidatesData} />
        </div>
      </div>
    </div>
  );
};

export default VotingArea;
