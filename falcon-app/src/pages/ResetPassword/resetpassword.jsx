import React from 'react'
import "./style/resetpass.css"


export default function 
() {
  return (
    <div>
        <div className="reset-pass"></div>
            <h1 className='txt-enter'>Enter New Password</h1>

            <form action="" className='enter-new'>
            <label className="label-new">New Password</label><br/>
              <input type="password" name="new" className='input-new' placeholder='New Password'></input><br/>

              <label className="label-confirm">Confirm New Password</label><br/>
              <input type="password" name="confirm" className='input-confirm' placeholder='Confirm New Password'></input><br/>

              <button className="update-bttn" name="update">Update Password</button><br />
              <p className="go-back">Go back to<a className="log-link" href="/login">Login Page</a></p><br />
            </form>

    </div>
  )
}
