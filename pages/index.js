import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Barra from "./components/navbar";


import axios from 'axios';



const Api = ({dados}) => (
<div>

<Barra></Barra>
{console.log(dados)}
<Container>
    

{/* Inicio Carousel */}
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
   {/* Fim Carousel */}



  {/* Inicios Cards */}


  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[0].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
      {dados.articles[0].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[0].description}
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[1].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
      {dados.articles[1].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[1].description}
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[2].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
      {dados.articles[2].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[2].description}
      </CardText>
      
    </CardBody>
  </Card>
</CardGroup>



  {/* Fim Cards */}


  {/* Inicios Cards */}


  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[3].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
      <CardTitle tag="h5">
      {dados.articles[3].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[3].description}
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
      {dados.articles[4].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[4].description}
      </CardText>
      
    </CardBody>
  </Card>
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
      {dados.articles[5].title}
      </CardTitle>
      
      <CardText>
      {dados.articles[5].description}
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