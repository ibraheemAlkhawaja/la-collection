import { useState } from "react";
import "./SignIn.css";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import usePost from "../../Custom Hook/usePost";
import SignInService from "../../Services/SignInService";
import Cookies from "cookies-js";


const SignIn = () => {
  const [userName ,setUserName]=useState()
  const [password ,setPassword] =useState()
  const navigate =useNavigate()
  const [loading,handelSubmit] =usePost(SignInService.post,(res)=>{
    Cookies.set("token" ,res.data.token)
    navigate("/")
  })
  const onSubmit=(e)=>{
    e.preventDefault()
    handelSubmit({
      username :userName,
      password :password
    })
  }
  return (
    <div className="signUp">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <h1>login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="UserName"
              required
              onChange={(e)=>{setUserName(e.target.value)}}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <FaLock className="icon" />
          </div>
          <div className="remmber-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">
        submit
          </button>
          <div className="register-link">
            <p>
              dont have an account? <NavLink to="/Register">Register</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn; 