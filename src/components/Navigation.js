import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import React from "react";
import {signOutUser} from "../services/firebase"
import { useSelector,useDispatch } from "react-redux";
import {selectUser} from "../features/userSlice"
import {logout } from "../features/userSlice"

function Navigation() {
  const currentUser=useSelector(selectUser)
  const dispatch = useDispatch()
  const signOutHandle=(e)=>{
    e.preventDefault();
    signOutUser()
    dispatch(logout())
    console.log("logout")
  }
  return (
    <div class="">
      <Navbar color="dark" expand="md" fixed="top">
        <NavbarBrand className="logo">
          <Link style={{ textDecoration: "none" }} to="/">
            LOGO
          </Link>
        </NavbarBrand>
        <Nav>
          <NavItem className="menu">
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/home">
              Home
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/work">
              Work
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/contact">
              Contact
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/about">
              About
            </Link>
          </NavItem>
        </Nav>
        <Nav>
          {currentUser?(
            <NavItem className="midleware">
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/profile">
            {currentUser.displayName}
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to ="/" onClick={signOutHandle}>
              Logout
            </Link>
          </NavItem>
          ):(
            <NavItem className="midleware">
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/signup">
              Signup
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/login">
              Login
            </Link>
          </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
