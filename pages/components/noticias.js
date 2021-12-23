import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col} from 'reactstrap';


import axios from 'axios';

export default function Noticias() {

  Api.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}


  return (

Api = ({dados}) => (

<div>
<Container>
 
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

</Container>
</div>


))
}







