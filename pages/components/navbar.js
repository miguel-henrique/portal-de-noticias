import React from 'react';
import { Input, Offcanvas, Button, OffcanvasHeader, OffcanvasBody, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';



export default function Barra() {

  const [isOpen, setIsOpen] = React.useState(false);
  return (

    
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
    <img width="30px" src="https://img.icons8.com/flat-round/64/000000/tree.png"/>
      Arvore News
    </NavbarBrand>
    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
    <Collapse isOpen={isOpen} navbar>
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
      
      </Nav>
      
  
      
    </Collapse>
  </Navbar>
  

  )
}

