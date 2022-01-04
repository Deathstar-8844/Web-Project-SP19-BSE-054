import React from 'react'

function Login() {
    return (
        <div>
            
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-text">
                <h1>Login To Your Account</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="login-form">
                      <h2>Login</h2>
                      <form>
                        <input type="text" placeholder="Name" className="form-control" /><br />
                        <input type="text" placeholder="Email" className="form-control" /><br />
                        <input type="int" placeholder="Password" className="form-control" /><br />
                      </form>
                      <h3>forget Password?</h3>
                      <a href="index.html"><button className="btn5">Sign In</button></a>
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

export default Login
