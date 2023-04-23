import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./style/home.css";
import FirstBanner from "../../Images/falcon_discuss.png";
import { Link }  from "react-router-dom";


export const Home = () => {
  return (
    <div> 
  <img src={FirstBanner} alt="background" className="bg-image"  />
  <div className="banner-content">

  <p className="falcon-title-banner">DISCOVER THE EASIEST WAY TO BECOME A LICENSED CIVIL ENGINEER with
  <br />FALCon's PROVEN QUALITY and HANDS-ON REVIEW PROGRAM!</p>
              </div>
              
              <Link to="/enrollment" className="enrollnow_btn">
              <button type="button" class="btn btn-success">
                ENROLL NOW
              </button>
            </Link>  
         </div>
  )
}