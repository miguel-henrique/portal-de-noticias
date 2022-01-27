import { useRouter } from 'next/router'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Barra from "../components/navbar";
import Publicidade from '../components/publicidade';
import Head from 'next/head'

import axios from 'axios';

const Post = ({dados}) => {
  const router = useRouter()
  const { id } = router.query
  
  return (
      
    <>
      <Barra />
      <h1>Post: {dados.articles[4].title}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${dados.articles[4].title}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

Post.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}

export default Post
