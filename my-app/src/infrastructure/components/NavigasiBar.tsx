import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from "react-router-dom";

export default function NavigasiBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand className="ms-5" href="/">
        <Link ms-5 to='/' style={{
          textDecoration: "none", 
          fontWeight: "bolder", 
          color: "#333333",
          fontSize: "30px"
        }}> 
          NewsApp
        </Link>
      </NavbarBrand>
    </Navbar>
  )
}
