import React from 'react'

function Signup() {
    return (
        <div>
            
      <div className="Register">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="register-text">
                <h1>Create An Account</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="register-form">
                      <h2>Register</h2>
                      <form>
                        <input type="text" placeholder="Name" className="form-control" /><br />
                        <input type="text" placeholder="Email" className="form-control" /><br />
                        <input type="int" placeholder="Phone" className="form-control" /><br />
                        <input type="int" placeholder="Password" className="form-control" /><br />
                        <input type="int" placeholder="Confirm-Password" className="form-control" /><br />
                      </form>
                      <a href="Login.html"><button className="btn6">Sign up</button></a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="social-form">
                      <h4>Login Via Social Accounts</h4>
                      <button className="btn">Login With Facebook</button>
                      <button className="btn1">Login With Tiwitter</button>
                      <button className="btn2">Login With Google+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Signup
