import React from "react";

import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Link from "next/link";

//import { truncStr } from "./utils.js";

const MovieCard = props => {
 // const { title, urlToImage, url, description } = props.item;


  //console.log(props.item.list);

  /* const arr = [1, 2, 3];

const result = arr.map(element => {
  return element + 1;
});

console.log(result); // 👉️ [2, 3, 4] */


const articles = props.item.list;

articles.defaultProps = {
  m: "Rahul",
  i: "deepblue"
}

const news = articles.map((m, i) => 
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
);

  return (
    <div>

<div>{news}</div>
      <div>
        {/* <h1>{props.item.list[1].title}</h1> */}
      {/* <h3>{truncStr(title)}</h3> */}
      </div>
    </div>
  );
};

export default MovieCard;
