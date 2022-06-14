import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";

function Navigation() {
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
          <NavItem className="midleware">
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/signup">
              Signup
            </Link>
            <Link style={{ textDecoration: "none" }} className="mx-2" to="/login">
              Login
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
