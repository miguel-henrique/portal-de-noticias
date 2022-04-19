import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";

import React from "react";

import Movie from "./movie";

const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <Container >
      <Card >{cards}</Card>
    </Container>
  );
};

export default Movies;
