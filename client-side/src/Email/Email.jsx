import React from "react";
import './Email.css'

function Email(){
    return(
        <>

  <div class="container">
    <div class="form-box">
      <h2>Enter Your Email</h2>
      <form action="#" method="post">
        <div class="input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <button type="submit" class="btn-submit">Verify</button>
      </form>
    </div>
  </div>


       



        </>
    )
}
export default Email