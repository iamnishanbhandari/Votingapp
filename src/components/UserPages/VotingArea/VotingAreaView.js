import React from "react";

const VotingAreaView = ({ userInfo }) => {
  return userInfo
    ? userInfo.map((userInfom) => (
        <div>
          <p>{userInfom.name} </p>
          <p>{userInfom.name} </p>
          <p>{userInfom.name} </p>
          <p>{userInfom.name} </p>
        </div>
      ))
    : "No data provided";
};

export default VotingAreaView;
