import React from 'react'
import "./style/forgotpass.css"

export default function 
() {
  return (
    <div>
        <div className="forgot-pass">
            <h1 className='forgot'>FORGOT PASSWORD?</h1>
            <p className='dont-worry'>Don’t worry we got you covered. Enter the email address associated with your account.</p>

            <form action="" className="email-inputf">
              <label className="email-label">Email</label><br/>
              <input type="email" name="email" className="input-emailf" placeholder="Email"/><br />

              <button className="submit-bttn" name="submit">Submit</button><br />
            
              <p className="go-back">Go back to<a className="log-link" href="/login">Login Page</a></p><br />
            </form>  
        </div>
    </div>
  )
}
