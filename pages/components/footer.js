import React from 'react';
import { Container, Row, Col, } from 'reactstrap';


export default function Footer() {

  return (

    <Container>
    <Row>
    <Col className="bg-light border">
     <h4>AvoreNews</h4> 
     <li>São Paulo</li>
    </Col>
    <Col className="bg-light border">
      <h4>Categorias</h4>
    </Col>
    <Col className="bg-light border">
      <h4>Intitucional</h4>
    </Col>
    <Col className="bg-light border">
      <h4>Outros</h4>
    </Col>
  </Row>
  </Container>

  )
}

