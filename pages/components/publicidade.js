import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, Card, CardTitle, CardText, Button, Col, Row } from 'reactstrap';

export default function Publicidade() {
    return (

<Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Pluswebb - Consultoria especializada em SEO
      </CardTitle>
      <CardText>
        Seu site nas primeiras posições do Google. Aumente suas vendas com tráfego qualificado em seu site.
      </CardText>
      <Button href="https://pluswebb.com" target="_blank"> 
        Saiba Mais
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Reeciclar - De volta ao Ciclo!
      </CardTitle>
      <CardText>
        Tranformamos residuos plásticos em novos produtos. Resinas recicladas de PP e PE com alta qualidade.
      </CardText>
      <Button href="https://reeciclar.com.br" target="_blank">
        Saiba Mais
      </Button>
    </Card>
  </Col>
</Row>

)
}
