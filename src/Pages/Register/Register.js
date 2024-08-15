import { useState } from "react";
import "./Register.css"
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import usePost from "../../Custom Hook/usePost";
import SignUpService from "../../Services/SignUpService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userName ,setUserName] =useState()
    const [email ,setEmail] =useState()
    const [password ,setPassword] =useState()
    const navigate =useNavigate()
    const [loading ,handelSubmit] =usePost(SignUpService.post,()=>{
        navigate("/SignIn")
    })
    const onSubmit =(e)=>{
        e.preventDefault()
        handelSubmit({
            username :userName,
            password :password,
            email :email
        })

    }
    return (
        <>
            <div className="register">
                <div className="wrapper">
                    <form onSubmit={onSubmit}>
                        <h1>Register</h1>
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
                                type="text"
                                placeholder="Email"
                                required
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <MdEmail className="icon" />
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
                        <button type="submit">submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register