import React from "react";
import './SignUp.css'

function SignUp(){
    return(
        <>
   
  <div class="container">
    <form class="signup-form">
      <h2>Create an Account</h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <div class="button-group">
        <button type="button" class="btn-register">Register</button>
        <button type="submit" class="btn-submit">Sign In</button>
      </div>
      <br />
      <p>forget password?</p>
    </form>
  </div>



        </>
    )
}
export default SignUp