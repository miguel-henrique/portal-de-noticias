import React from "react";

import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";

import { truncstr } from "./utils";

const MovieCard = props => {
  const { title, urlToImage, url, description } = props.item;

  return (
    <div>

      <Card>
  
  <CardImg
    alt="Card image cap"
    src={urlToImage}
    top
    width="100px"
    height="200px"
  />
  <CardBody >
  
  <Link href={url} target='_blank'>
    <CardTitle 
    tag="h5"
    alt={title}>
      {title}
    </CardTitle>
  </Link> 
    
    <CardText
    alt={description}>
    {description}
    </CardText>
  </CardBody>
</Card>



      <div>
        <h3 >{truncstr(title)}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
