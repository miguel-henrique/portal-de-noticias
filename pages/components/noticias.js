import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col} from 'reactstrap';


import axios from 'axios';



const Api = ({dados}) => (
<div>

<Container>

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
    </Col>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      <div class="col" >
    {dados.articles[1].title}
    <img src={dados.articles[1].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
    <Col
      className="bg-light border"
      sm="4"
    >
      <div class="col">
    {dados.articles[2].title}
    <img src={dados.articles[2].urlToImage} class="rounded mx-auto d-block" width={250} alt="..."></img>

    </div>
    </Col>
  </Row>  

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

);




Api.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}

export default Api