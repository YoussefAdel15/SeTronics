import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data.errors);

    if (data.errors === undefined) {
      localStorage.setItem("token", data.user);
      alert("login succ");
    } else {
      alert("wrong");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="all">
      {" "}
      <div class="signup-form">
        <div class="form-group">
          <form novalidate onSubmit={loginUser}>
            <h2>Sign In</h2>
            <h5 className="hint-text"> Sign an account</h5>
            <div class="form-group">
              <input
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
              />
            </div>

            <div class="form-group">
              <input
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
            </div>

            <button type="submit" class="btn btn-success btn-lg btn-block">
              Sign NOW{" "}
            </button>
          </form>
          <div class="text-center">
            Already have an account? <a className="text-primary" href="/register">Register HERE</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
