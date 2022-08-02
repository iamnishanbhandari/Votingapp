import React, { useState } from "react";
import "./ChangeStatus.css";

const ChangeStatus = () => {

  const [statusText, setstatusText] = useState('Registration');

const handleClick = () =>{
  statusText === 'Voting' ? setstatusText('Registration') : setstatusText('Voting')
}
return (
  <>
    <div className="container">
      <div className="mainStatusBox">
        <div className="headStatusBox">
          <p>ChangeStatus</p>
        </div>
      </div>
      <div className="Status">
        <p className="currentPhase">Current Phase:{statusText}  </p>
        <div className="Button">
          <button onClick={handleClick}> ChangeStatus </button>
        </div>
      </div>
    </div>
  </>
);
};

export default ChangeStatus;
