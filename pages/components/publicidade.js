import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CardImg, Link, Card, CardTitle, CardText, Button, Col, Row } from 'reactstrap';

export default function Publicidade() {
    return (

<Row>
  <Col sm="6">
    <Card body>
    
      <CardTitle tag="h5"><img src='https://pluswebb.com/wp-content/uploads/2021/03/cropped-favicon-180x180.png' width={20}></img>
        Pluswebb - Consultoria especializada em SEO
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="https://pluswebb.com/wp-content/uploads/2021/03/Tecnologia-B2B.pptx-7.png"
      top
      width="100px"
      height="200px"
    />
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
      <CardTitle tag="h5"><img src='https://reeciclar.com.br/wp-content/uploads/2021/03/icone-2-300x300.png' width={20}></img>
        Reeciclar - De volta ao Ciclo!
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="https://reeciclar.com.br/wp-content/uploads/2021/11/Reeciclar-Do-Brasil-De-volta-ao-ciclo-4.jpg"
      top
      width="100px"
      height="200px"
    />
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
