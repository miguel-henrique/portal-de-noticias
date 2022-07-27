import React from "react";

import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";


const MovieCard = (data) => {

  return (
    <div>
{data.item.list.map((m, i) => 
<div key={i} item={m}>


<CardGroup>
  <Card>
  
    <CardImg
      alt="Card image cap"
      src={m.urlToImage}
      top
      width="100px"
      height="200px"
    />
    <CardBody >
    
    <Link href={m.url} target='_blank'>
      <CardTitle 
      tag="h5"
      alt={m.title}>
        {m.title}
      </CardTitle>
    </Link> 
      
      <CardText
      alt={m.description}>
      {m.description}
      </CardText>
    </CardBody>
  </Card>
  
</CardGroup>
</div>
)}  
    </div>
  );
};

export default MovieCard;
