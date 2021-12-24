import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, UncontrolledCarousel } from 'reactstrap';


export default function Carousel() {
  return (
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
    </Container>

  )
}