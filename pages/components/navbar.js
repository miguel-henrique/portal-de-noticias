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
      
      </Nav>
      
      {/* <img width="30px" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>  */}

      
      {/* <Search></Search> */}
      <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Open
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
</div>
    </Collapse>
  </Navbar>
  

  )
}

