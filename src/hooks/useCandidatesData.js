import React, { useEffect, useState } from "react";

const useCandidatesData = () => {
  const [candidatesData, setCandidatesData] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("candidatesData"));
    data && setCandidatesData(data);
  }, []);

  const addCandidate = (name, age, party, qualification) => {
    const candidate = {
      name,
      age,
      party,
      qualification,
    };
    console.log(candidate);

    setCandidatesData((currCandidatesData) => [
      ...currCandidatesData,
      candidate,
    ]);

    alert("Data added successfully");
  };
  useEffect(() => {
    candidatesData.length > 0 &&
      localStorage.setItem("candidatesData", JSON.stringify(candidatesData));
  }, [candidatesData]);

  return {
    candidatesData,
    addCandidate,
  };
};

export default useCandidatesData;
