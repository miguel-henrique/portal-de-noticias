import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import React from "react";

import Movie from "./movie";


/* function Movies ( props ) {


  {console.log(props)};

 const dataResult = Object.entries(props).map(([key, value]) => ({ [key]: value }));

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
}; */


const Movies = ( props ) => {


  {console.log(props)};

 const dataResult = Object.entries(props).map(([key, value]) => ({ [key]: value }));

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
