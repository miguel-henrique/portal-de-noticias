import React from 'react';
import { Input, Offcanvas, Button, OffcanvasHeader, OffcanvasBody, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';



export default function Expandnav() {

    const [isOpen, setIsOpen] = React.useState(false);
  return (

    
    <div>
        <Navbar  expand="md">
            <NavbarBrand href="/">Brand</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div >
  

  )
}

