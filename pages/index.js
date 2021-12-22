import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { UncontrolledCarousel, Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

import axios from 'axios';


const Index = ({dados}) => (
    <div key={dados.articles[1].id}>


{/* Início da NavBar */}
<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
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
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
  {/* Fim da Navbar */}

<div >
  <Container>
  <UncontrolledCarousel
  items={[
    {
      altText: dados.articles[0].title,
      caption: dados.articles[0].title,
      key: 1,
      src: dados.articles[0].urlToImage
    },
    {
      altText: dados.articles[1].title,
      caption: dados.articles[1].title,
      key: 2,
      src: dados.articles[1].urlToImage
    },
    {
      altText: dados.articles[2].title,
      caption: dados.articles[2].title,
      key: 3,
      src: dados.articles[2].urlToImage
    }
  ]}
 />
  </Container>
</div>




{/* Início Colunas */}

<div>
<Container>
  <Row>
    <Col className="bg-light border">
      .col
    </Col>
  </Row>
  <Row>
    <Col className="bg-light border">
    <div class="col">
    {dados.articles[0].title}
    <img src={dados.articles[0].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col className="bg-light border" >
    <div class="col" >
    {dados.articles[1].title}
    <img src={dados.articles[1].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col className="bg-light border">
    <div class="col">
    {dados.articles[2].title}
    <img src={dados.articles[2].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col className="bg-light border">
    <div class="col">
    {dados.articles[3].title}
    <img src={dados.articles[3].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      xs="3"
    >
      .col-3
    </Col>
    <Col
      className="bg-light border"
      xs="auto"
    >
      .col-auto - variable width content
    </Col>
    <Col
      className="bg-light border"
      xs="3"
    >
      .col-3
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      xs="6"
    >
      .col-6
    </Col>
    <Col
      className="bg-light border"
      xs="6"
    >
      .col-6
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      .col-6 .col-sm-4
    </Col>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      .col-6 .col-sm-4
    </Col>
    <Col
      className="bg-light border"
      sm="4"
    >
      .col-sm-4
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      sm={{
        offset: 1,
        order: 2,
        size: 6
      }}
    >
      .col-sm-6 .order-sm-2 .offset-sm-1
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      md={{
        offset: 3,
        size: 6
      }}
      sm="12"
    >
      .col-sm-12 .col-md-6 .offset-md-3
    </Col>
  </Row>
  <Row>
    <Col
      className="bg-light border"
      sm={{
        offset: 1,
        size: 'auto'
      }}
    >
      .col-sm-auto .offset-sm-1
    </Col>
    <Col
      className="bg-light border"
      sm={{
        offset: 1,
        size: 'auto'
      }}
    >
      .col-sm-auto .offset-sm-1
    </Col>
  </Row>
</Container>
</div>

 
    </div>

    
);


Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}



export default Index;