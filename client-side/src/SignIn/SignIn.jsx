import React from "react";

function SignIn(){
    return(
        <>


<div class="form-container">
    <h2>Create an Account</h2>
    <form action="#" method="post">
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
        </div>

        <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
        </div>

        <div class="input-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required/>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>



        </>
    )
}
export default SignIn