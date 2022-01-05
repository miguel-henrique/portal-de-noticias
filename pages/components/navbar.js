import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Input, Offcanvas, Button, OffcanvasHeader, OffcanvasBody, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

export default function Barra() {
  return (

    
  <Navbar
    color="light"
    expand="md"
    light
  >

{/* <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    |||
  </Button>
  <Offcanvas toggle={function noRefCheck(){}}>
    <OffcanvasHeader toggle={function noRefCheck(){}}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div> */}



    <NavbarBrand href="/">
    <img width="30px" src="https://img.icons8.com/fluency/48/000000/logout-rounded.png"/>
      Portal de Noticias
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/negocios/">
            Negócios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Economia
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Esporte
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Tecnologia
          </NavLink>
        </NavItem>
        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      
      {/* <img width="30px" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>  */}

      
      <NavbarText>
       
      <div > 
  
  <Input
   id="Pesquisas"
   name="Pesquisas"
   placeholder="Pesquisar"
   type="search"
  />
</div>
      </NavbarText>
    </Collapse>
  </Navbar>

  )
}

