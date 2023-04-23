import React from 'react'
import "./style/aboutus.css";
import cor from "../../Images/cor.png"
import visiony from "../../Images/visiony.png"

export default function aboutus() {
  return (
    <div>
      <div className='About'>
        <h1>ABOUT US</h1>
      </div>
      <div className='bout'>
      <p>Welcome to FAL Conducive Engineering Review Center, also known as FALCon!</p>
      <p>FALCon was established in 2018 under the directorate of Engineer Francis Arjay Luz, the 2015 Top One in Civil Engineering Licensure Examination. With his expertise and passion for teaching, FALCon has become one of the top five civil engineering review centers in Manila. At FALCon, we believe that every aspiring engineer deserves quality education and training to excel in their chosen profession. That is why we offer a conducive and competitive learning environment, equipped with state-of-the-art facilities and comprehensive review materials.</p>
      <p>Our team of highly qualified instructors, who are also licensed engineers, is committed to providing personalized and effective teaching strategies to help our students achieve their goals. We take pride in our excellent track record of producing top-notch board passers, who are now successful professionals in the industry.</p>
      </div>
      <div class="container">
  <div class="left-section">
  <p class="mid-text">VISION</p>
  <img class="left-image" src={visiony} alt="visiony"></img>
    <p class="vissy">To develop innovative review techniques and training through updated modules, concept-based teaching approach, and top-caliber review instructors.</p>
  </div>

  <div class="right-section">
  <p class="mid-text">MISSION</p>
  <img class="left-image" src={cor} alt="cor"></img>
    <p class="vissy">F.A.L. Conducive Engineering Review Center envisions itself to be the top producer of competent and topnotch civil engineers of the country by the year 2025.</p>
  </div>
</div>
    </div>

  )
}
