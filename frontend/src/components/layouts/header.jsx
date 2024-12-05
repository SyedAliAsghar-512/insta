import React, {useEffect, useState} from "react";
import Search from "./Search";
import "../../App.css"
import { useGetMeQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";
import DarkModeToggle from "../layouts/DarkModeToggle"
import toast from "react-hot-toast"
import { setIsAuthenticated } from "../../redux/features/userSlice";
import Sidebar from "./SideBar";

const Header = () => {

  const {user} = useSelector((state) => state.auth)
  const [color, setColor] = useState("")
  const {isLoading } = useGetMeQuery()
  const [textColor, setTextColor] = useState("")
  const [itemColor, setItemColor] = useState("")
  const savedMode = localStorage.getItem('darkMode') === 'true';
  const navigate = useNavigate()

  const handleClick = () => {
    setTimeout(() => {
       navigate(0)
    }, 2000); 
};

    const [logout] = useLazyLogoutQuery()

    const LogoutHandler =() => { 
      logout();
      handleClick()
      toast.error("You are Logged-Out")
      }

      const refresh = () => {
        navigate("/dashboard")
      }
    
      useEffect(() => {
        if(savedMode) {
           setColor("#0e1011")
           setTextColor("white")
           setItemColor("black")
        }
          else {
             setColor("#0d2448")
             setTextColor("black")
             setItemColor("white")
          }
         
      })
    
      // Simulate a redirection (for example, after a login)
      const handleRedirect = () => {
        setTimeout(() => {
          toast.success("Redirecting")
       }, 3000); 
      };

    return (
      <>
    <nav className="navbar row" style={{ backgroundColor: "#1868C4"}}>
      <div className="col-12 col-md-3 ps-5 text-center">
        <div className="navbar-brand">
       
          <a href="/dashboard">
            <img src="/images/logo.png" width="100" height="100" alt="Nust"/>
            </a>
            { user ? (
            <Sidebar />
          ): (
            !isLoading && (
              <p></p>
            ))}
        </div>
      </div>
      
      <h5 className="name col-6 col-md-6 ps-6 text-center">NATIONAL UNIVERSITY OF SCIENCE & TECHNOLOGY</h5>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        
         { user ? (
<>
         
        <div className="ms-4 dropdown" >
          <button
            className="btn dropdown-toggle text-white "
            type="button"
            id="dropDownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{margin: "5px"}}
          >
            <figure className="avatar avatar-nav">
              <img
                src={ user?.avatar ? user?.avatar?.url : "https://github.com/ghulamabbas2/shopitv2-html/blob/master/images/default_avatar.jpg?raw=true"}
                className="rounded-circle"
              />
            </figure>
            <span>{user?.name}</span>
          </button>
          
          <div className="dropdown-menu w-100" aria-labelledby="dropDownMenuButton" style={{ backgroundColor: "white"}}>
            {user?.role === "admin" && (
              <Link className="dropdown-item" id="drop" to="/admin/dashboard" style={{backgroundColor: itemColor, color: textColor}}>{" "} Dashboard{" "} </Link>
              
            )}

            <Link className="dropdown-item" id="drop" to="/me/profile" >{" "} Profile{" "} </Link>

            <Link  className="dropdown-item text-danger" id="drop" onClick={LogoutHandler} to=""> Logout</Link>
          </div>
        </div>
        <p></p>
        <Link to="/dashboard" className="btn" onClick={refresh} style={{ color: itemColor, borderColor: "white"}}>Home Page</Link> 
        </>

        
): (
  !isLoading && (
    <Link to={"https://nust.edu.pk"} className="btn" onClick={handleRedirect} style={{ color: itemColor, borderColor: "white"} }>NUST Main Website</Link>
  )
)}

      </div>
     
    </nav>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    <script src="https://kit.fontawesome.com/9edb65c86a.js"></script>

</>
    )
}

export default Header