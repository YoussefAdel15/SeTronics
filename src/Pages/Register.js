import React, { useState } from "react";
function Register(props) {
  const [name, setFull] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddres] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        address,
        number,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className="bg">
        <div class="signup-form">
          <form noValidate onSubmit={registerUser} method="post">
            <h2>Register</h2>
            <p class="hint-text">Create your account</p>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <input
                    value={name}
                    onChange={(e) => setFull(e.target.value)}
                    type="text"
                    class="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
                <div class="col">
                  <input
                    // onChange={this.onChange}
                    type="text"
                    class="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                // onChange={this.onChange}
                type="password"
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                value={address}
                onChange={(e) => setAddres(e.target.value)}
                type="text"
                class="form-control"
                name="address"
                placeholder="Enter your address here"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="string"
                class="form-control"
                name="phone number"
                placeholder="Enter your phone number here"
                required="required"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg btn-block">
                Register Now
              </button>
            </div>
          </form>
          <div class="text-center">
            Already have an account? <a className="text-primary" href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
