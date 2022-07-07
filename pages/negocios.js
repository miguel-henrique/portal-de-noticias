import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Barra from "./components/navbar";
import Link from "next/link";
import Head from 'next/head'
import Publicidade from './components/publicidade';


import axios from 'axios';





const Negocios = ({dados}) => (
<div>




    {/* Inicio head */}
    
      <Head>
        <title>Arvore News - Negócios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       
        <base href=""/>
        <meta name="description" content="Arvore News consumindo api do Google"/>
        <meta name="keywords" content="Arvore News, Arvore News de negócios, noticias de negócios, negócios"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="geo.position" content="-23.6873165,-46.7046827"/>
        <meta name="geo.placename" content="São Paulo-SP"/>
        <meta name="geo.region" content="SP-BR"/>
        <meta name="ICBM" content="-23.6873165,-46.7046827"/>
        <meta name="robots" content="index,follow"/>
        <meta name="rating" content="General"/>
        <meta name="revisit-after" content="7 days"/>
        <link rel="canonical" href=""/>
        <meta name="author" content="Arvore News"/>	
        <link rel="shortcut icon" href="https://img.icons8.com/flat-round/64/000000/tree.png" />
        
        <meta property="og:region" content="Brasil"/>
        <meta property="og:title" content="Arvore News - Negócios"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content=""/>
        <meta property="og:description" content="Arvore News consumindo API do Google"/>
        <meta property="og:site_name" content="Arvore News"/>
      </Head>
    

  {/* Fim head */} 



<Barra></Barra>
{console.log(dados)}
<Container>
    

{/* Inicio Carousel */}
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
   {/* Fim Carousel */}



{/* Search */}
<Search></Search>
{/* Fim Search */}

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
    
    <Link href={dados.articles[0].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[0].title}>
      {dados.articles[0].title}
      </CardTitle>
    </Link> 
      
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
    <Link href={dados.articles[1].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[1].title}>
      {dados.articles[1].title}
      </CardTitle>
      </Link>
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
    <Link href={dados.articles[2].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[2].title}>
      {dados.articles[2].title}
      </CardTitle>
      </Link>
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
    <Link href={dados.articles[3].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[3].title}>
      {dados.articles[3].title}
      </CardTitle>
      </Link>
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
    <Link href={dados.articles[4].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[4].title}>
      {dados.articles[4].title}
      </CardTitle>
      </Link>
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
    <Link href={dados.articles[5].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[5].title}>
      {dados.articles[5].title}
      </CardTitle>
      </Link>
      <CardText>
      {dados.articles[5].description}
      </CardText>
      
    </CardBody>
  </Card>
</CardGroup>



  {/* Fim Cards */}


{/* Inicio Publicidade */}

<Publicidade></Publicidade>

{/* Fim Publicidade */}


{/* Inicios Cards */}


<CardGroup>
  <Card>
  
    <CardImg
      alt="Card image cap"
      src={dados.articles[6].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    
    <Link href={dados.articles[6].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[6].title}>
      {dados.articles[6].title}
      </CardTitle>
    </Link> 
      
      <CardText>
      {dados.articles[6].description}
      </CardText>
    </CardBody>
  </Card>
  
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[7].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    <Link href={dados.articles[7].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[7].title}>
      {dados.articles[7].title}
      </CardTitle>
    </Link>
      <CardText>
      {dados.articles[7].description}
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[8].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    <Link href={dados.articles[8].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[8].title}>
      {dados.articles[8].title}
      </CardTitle>
      </Link>
      <CardText>
      {dados.articles[8].description}
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
      src={dados.articles[9].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    
    <Link href={dados.articles[9].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[9].title}>
      {dados.articles[9].title}
      </CardTitle>
    </Link> 
      
      <CardText>
      {dados.articles[9].description}
      </CardText>
    </CardBody>
  </Card>
  
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[10].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    <Link href={dados.articles[10].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[10].title}>
      {dados.articles[10].title}
      </CardTitle>
      </Link>
      <CardText>
      {dados.articles[10].description}
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={dados.articles[11].urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody>
    <Link href={dados.articles[11].url} target='_blank'>
      <CardTitle tag="h5"
      alt={dados.articles[11].title}>
      {dados.articles[11].title}
      </CardTitle>
       </Link>
      <CardText>
      {dados.articles[11].description}
      </CardText>
      
    </CardBody>
  </Card>
</CardGroup>



  {/* Fim Cards */}



  
</Container>
</div>

);




Negocios.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}

export default Negocios