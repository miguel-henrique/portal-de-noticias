import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Barra from "../components/navbar";
import Publicidade from '../components/publicidade';
import Link from "next/link";
import Head from 'next/head'


import axios from 'axios';





const Api = ({dados}) => (
<>
      <Barra />
      {console.log}
      <h1>{dados.articles[3].title}</h1>
      <CardImg
      alt="Card image cap"
      src={dados.articles[3].urlToImage}
      top
      width="100px"
      height="400px"
    />
    <p>{dados.articles[3].content}</p>
     
    </>

);



Api.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}

export default Api