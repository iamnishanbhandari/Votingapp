import React, { useEffect, useState } from "react";
import View from "./View";
import "./CandidatesDetails.css";
import useCandidatesData from "./Customhook";

const CandidatesDetails = () => {
const {candidatesData}=useCandidatesData();

  return (
    
      <div className="detailsMainBox">
        <table>
          <thead>
            <tr>
              <th>Name </th>
              <th>Age </th>
              <th>Party </th>
              <th>Qualification </th>
            </tr>
          </thead>
          <tbody>
            <View info={candidatesData} />
          </tbody>
        </table>
      </div>
    
  );
};

export default CandidatesDetails;
