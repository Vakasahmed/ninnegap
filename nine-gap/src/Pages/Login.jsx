import React, { useState } from "react";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login({setLoginUser}) {

  const navigateTo = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };6

  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => 
      {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigateTo("/dashboard")
    }
    )
}

  return (
    <div className="login-parent flex">
      {console.log(user)}
      <div className="login flex">
        <h1>Log In</h1>
        <div className="input flex">
          <div className="input gap">
            <label>Email</label>
            <input
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input gap">
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button className="login-btn gap" onClick={login}>
            LogIn
          </button>
        </div>
        <div className="flex gf-login">
          <button className="flex gf-btn">
            <img src={google} alt="Google" />
            LogIn with Google
          </button>
          <button className="flex gf-btn">
            <img src={facebook} alt="FaceBook" />
            LogIn with Facebook
          </button>
        </div>
        <div className="port flex">
          <h2>OR</h2>
          <button className="sin1" onClick={()=>{navigateTo("/signup")}}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
