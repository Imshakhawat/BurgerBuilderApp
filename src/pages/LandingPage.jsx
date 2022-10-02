import React from "react";
import {  NavLink } from "react-router-dom";
import "../css/landingpage.css";


const LandingPage = (props) => {
  const {data} = props;
  console.log(data);
  return (
    <div className="landingPageBackgroud">
      <div className="container  home">
        <h1>Happy Burger</h1>
        
        <NavLink className="button" to={
          {pathname:"/Customer",
          state:{data:data}}}>
          Order now!!
        </NavLink>
        
      </div>
    </div>
  );
};
 
export default LandingPage;