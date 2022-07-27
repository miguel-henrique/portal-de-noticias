import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import React from "react";

import Movie from "./movie";


function Movies ( list ) {


  {console.log(list)};

  //const dataResult = list;

 const dataResult = Object.entries(list).map(([key, value]) => ({ [key]: value }));

console.log(dataResult);

  let cards = <h3>Loading...</h3>;


  if (dataResult != null) {
    cards = dataResult.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <Container >
      <Card >{cards}</Card>
    </Container>
  );
};

export default Movies;
