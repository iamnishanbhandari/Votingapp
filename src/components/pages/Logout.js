import React from "react";
import "./Logout.css";
import {useNavigate } from 'react-router-dom';

const Logout = () => {

let user = JSON.parse(localStorage.getItem('useryoutube'))
const navigate = useNavigate();


const clicked = () =>{
localStorage.clear();
navigate('/Register');
}
  return (
    <>
      <div className="container">
        <div className="logoutBox">
            <p>Do you want to logout ?</p>
          
          <div className="logoutBtn"> 
          <button onClick={clicked}> Logout </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
