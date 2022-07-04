import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";

import React from "react";

import Movie from "./movie";


function Movies ({ list }) {
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

/* const arr = [1, 2, 3];

const result = arr.map(element => {
  return element + 1;
});

console.log(result); // 👉️ [2, 3, 4] */

export default Movies;
