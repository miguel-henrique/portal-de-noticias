import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Input, Offcanvas, Button, OffcanvasHeader, OffcanvasBody, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import Search from './search';



export default function Barra() {
  return (

    
  <Navbar
    color="light"
    expand="md"
    light
  >
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
          <NavLink href="/entretenimento/">
          Entretenimento
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/geral/">
          Geral
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/saude/">
          Saúde
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ciencia/">
          Ciência
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/esportes/">
          Esportes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tecnologia/">
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
            <DropdownItem href="/tecnologia/">
              Tecnologia
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

      
      {/* <Search></Search> */}
    </Collapse>
  </Navbar>

  )
}

