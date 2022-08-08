import React from "react";
import View from "../View";
import "./CandidatesDetails.css";
import useCandidatesData from "../../../hooks/useCandidatesData";

const CandidatesDetails = () => {
  const { candidatesData } = useCandidatesData();
  return (
    <div className="detailsMainBox">
      <table class="styled-table">
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
