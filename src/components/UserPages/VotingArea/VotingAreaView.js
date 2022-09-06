import React from "react";

const VotingAreaView = ({ userInfo }) => {
  return userInfo
    ? userInfo.map((userInfom) => (
        <div>
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
              ></div>
            </div>
          </div>
          <p>Name : {userInfom.name} </p>
          <p>Party : {userInfom.party} </p>
          <p>Age : {userInfom.age} </p>
          <p>Qualification : {userInfom.qualification} </p>
        </div>
      ))
    : "No data provided";
};

export default VotingAreaView;
