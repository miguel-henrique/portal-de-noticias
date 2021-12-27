import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Barra from "./components/navbar";


import axios from 'axios';



const Api = ({dados}) => (
<div>

<Barra></Barra>

<Container>

    
    <UncontrolledCarousel
    items={[
      {
        altText: dados.articles[0].title,
        //caption: dados.articles[0].title,
        key: 1,
        src: dados.articles[0].urlToImage
      },
      {
        altText: dados.articles[1].title,
        //caption: dados.articles[1].title,
        key: 2,
        src: dados.articles[1].urlToImage
      },
      {
        altText: dados.articles[2].title,
        //caption: dados.articles[2].title,
        key: 3,
        src: dados.articles[2].urlToImage
      }
    ]}
   />

<Row>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      <div class="col">
    {dados.articles[0].title}
    <img src={dados.articles[0].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    <div class="col">
    {dados.articles[1].title}
    <img src={dados.articles[1].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      <div class="col" >
    {dados.articles[2].title}
    <img src={dados.articles[2].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    <div class="col" >
    {dados.articles[3].title}
    <img src={dados.articles[3].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col
      className="bg-light border"
      sm="4"
    >
      <div class="col">
    {dados.articles[4].title}
    <img src={dados.articles[4].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    <div class="col">
    {dados.articles[5].title}
    <img src={dados.articles[5].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
  </Row>  

  <div>


  </div>


  {/* Inicios Cards */}


  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[5].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[4].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[6].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      
    </CardBody>
  </Card>
</CardGroup>



  {/* Fim Cards */}


{/* Inicio Sizing */}

<Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
</Row>


{/* Fim sizing */}
  
</Container>
</div>

);




Api.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}

export default Api