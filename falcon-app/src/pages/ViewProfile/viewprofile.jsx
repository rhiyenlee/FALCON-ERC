import React from "react";
import "./style/viewprofile.css";
import { studentList } from "./viewprofile-data";

export default function ViewProfile() {
  return (
    <div>
      <div class="viewprofile_container">
        <h3>View Profile</h3>
      </div>
      <div className="information-container">
        {studentList.map((item, index) => {
          return (
            <>
              <div key={index} className="name">
                <h3>Name: {item.name}</h3>
              </div>
              <div key={index} className="gender">
                <h3>Gender: {item.gender} </h3>
              </div>
              <div key={index} className="citizenship">
                <h3>Citizenship: {item.citizenship} </h3>
              </div>
              <div key={index} className="enrollmentstatus">
                <h3>Enrollment Status: {item.enrollstatus}</h3>
              </div>
              <div key={index} className="paymentstatus">
                <h3>Payment Status: {item.paymentstatus}</h3>
              </div>
              <div key={index} className="course">
                <h3>Course: {item.course}</h3>
              </div>
              <div key={index} className="email-main">
                <h3>Email: {item.email}</h3>
              </div>
              <div key={index} className="mobilenumber">
                <h3>Mobile Number: {item.mobilenumber}</h3>
              </div>
              <div key={index} className="program">
                <h3>Program/s: {item.program}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
