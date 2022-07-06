import React from "react";

import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";

import { truncStr } from "./utils.js";

const MovieCard = props => {
  const { title, urlToImage, url, description } = props.item;


  console.log(props.item.list);

  return (
    <div>




      <div>
        <h1>{props.item.list[1].title}</h1>
      {/* <h3>{truncStr(title)}</h3> */}
      </div>
    </div>
  );
};

export default MovieCard;
