import React from "react";

const Result = () => {
  return (
    <div
      className="resultContainer"
      style={{
        position: "absolute",
        top: "70px",
        left: "600px",
        bottom: "225px",
        width: "700px",
        height: "400px",
        fontfamily: "sans-serif",
        minwidth: "520px",
        minheight: "150px",
      }}
    >
      <div
        className="heading"
        style={{
          height: "40px",
          color: "white",
          backgroundColor: "rgb(20, 157, 203)",
        }}
      >
        <h4>Result</h4>
      </div>
      <div
        className="resultBody"
        style={{ border: "1px solid rgb(20, 157, 203)", height: "360px" }}
      >
        <p>Election is Not Over Yet!!! </p>
      </div>
    </div>
  );
};

export default Result;
